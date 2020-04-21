import React, { Component } from 'react';
import './App.css';
import YouTube from 'react-youtube';
import Clock from './Clock';
class App extends Component {     constructor(props) {
          super(props);
          this.state = { deadline: 'May, 26, 2020' };
     }     render() {
          return (
              <div className="AppContainer">
               <div className="App">
                   <div className="App-title">
                        Sardoche: la libération
                   </div>
                   <YouTube className="videoYt" videoId="vKDJfBsiXgw"/>
                   <div className="App-date">
                        
                   </div>                   
                   <Clock deadline={ this.state.deadline }/>
                   <footer>Made by <a href="https://twitter.com/tv_poro"><button>Poro</button></a></footer>
               </div>
              </div>
          );
     }
}
export default App;