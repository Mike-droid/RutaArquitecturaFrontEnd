import React from 'react';
import logo from './logo.svg';
import logoPlatzi from './platzi.png';
import './App.css';
import {CSSTransition, TransitionGroup} from 'react-transition-group';

class App extends React.Component {
    state = {
      logo: logo,
    }
    onClick(){
      this.setState({
        logo: logoPlatzi
      });
    }
    render(){
      return (
        <div className="App">
          <header className="App-header">
            <TransitionGroup>
              <CSSTransition
                transitionName="fade"
                transitionEnterTimeout={1000}
                transitionLeaveTimeout={1000}
                timeout={1000}>
                <img
                  key={this.state.logo}
                  src={this.state.logo}
                  className="App-logo"
                  alt="logo" />
              </CSSTransition>
            </TransitionGroup>
            <p>
              ¡Hola mundo desde React JS!
            </p>
            <button onClick={this.onClick.bind(this)}>Click me!</button>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
      );
    }
}

export default App;
