import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const welcome = "Welcome to using props";
class Welcome extends Component {
    
    render() {
        const { text, toggle } = this.props;
        
        
        return(
            <h1 className="App-title">{welcome}</h1>
        )
    }
}

class App extends Component {

    state = {
        toggle: true
    }

    toggle = () => {
        this.setState({
            toggle: !this.state.toggle
        })
    }

    render() {
        return ( <div className = "App" >
            <header className = "App-header" >
            <img src = { logo }
            className = "App-logo"
            alt = "logo" />
            <p>
                <Welcome text = "Welcome to Using Props" toggle ={this.state.toggle}/>
            Edit < code > src / App.js </code> and save to reload. </p > 
            <a className = "App-link"
            href = "https://reactjs.org"
            target = "_blank"
            rel = "noopener noreferrer" >
            Learn React </a>
            <button onClick={this.toggle}>Show / Hide</button> 
            {this.state.toggle && <p>This should show and hide</p>}
             
           
            </header > </div>
        );
    }
}

export default App;