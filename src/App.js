import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const welcome = "Welcome to using props";
class Welcome extends Component {
    
    render() {
    const { text } = this.props;
        return(
            <h1 className="App-title">{welcome}</h1>
        )
    }
}

class App extends Component {

    submit = () => {
        console.log(this.text)
        
    }

    render() {
        return ( <div className = "App" >
            <header className = "App-header" >
            <img src = { logo }
            className = "App-logo"
            alt = "logo" />
            <p>
                <Welcome text = "Welcome to Using Props"/>
            Edit < code > src / App.js </code> and save to reload. </p > 
            <a className = "App-link"
            href = "https://reactjs.org"
            target = "_blank"
            rel = "noopener noreferrer" >
            Learn React </a>
            <p className="App-intro"></p>

           
           <input type="text" ref={(input) => this.text = input}/>
            
            
            <button onClick={this.submit}> Show Value</button> 
             
           
            </header > </div>
        );
    }
}

export default App;