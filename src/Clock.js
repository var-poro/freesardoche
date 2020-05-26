import React, { Component } from 'react';
import './App.css';class Clock extends Component {
     constructor(props) {
     super(props);
     this.state = {
               days: 0,
               hours: 0,
               minutes: 0,
               seconds: 0,
          };
     }     UNSAFE_componentWillMount() {
          this.getTimeUntil(this.props.deadline);
     }     componentDidMount() {
          setInterval(() => this.getTimeUntil(this.props.deadline), 1000);
     }       leading0(num) {
          return num < 10 ? '0' + num : num;
     }     getTimeUntil(deadline) {
          const time = Date.parse(deadline) - Date.parse(new Date());
          if(time < 0) {
               this.setState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
          
          } else {
               const seconds = Math.floor((time/1000)%60);
               const minutes = Math.floor((time/1000/60)%60);
               const hours = Math.floor((time/(1000*60*60)));
               this.setState({ hours, minutes, seconds });
          }
     }     render() {
          return(
               <div className="fullDate">
                   <div className="Days">
                    <div className="Clock-days">
                         {this.leading0(this.state.hours)} heures
                        </div>
                   <img alt='' src="https://lolstatic-a.akamaihd.net/frontpage/apps/prod/signup/en_US/89d3e008377d368fc97c63ff92fbee3ee5ae599c/assets/en_US/assets/divider.png"/>
                   </div>                 <div className="Clock-minutes">
                         {this.leading0(this.state.minutes)} minutes
                    </div><div className="vr"></div><div className="Clock-seconds">
                         {this.leading0(this.state.seconds)} secondes
                    </div>
               </div>
          );
     }
}
export default Clock;