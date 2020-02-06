import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class Formulario extends Component{

  constructor(props){
    super(props);
    this.state = {
      email:"",
      password:""
    }
  }

  syncChanges(value, property){
    let state = {};
    state[property] = value;
    this.setState(state);
  }

  /* syncPasswordChanges(password){
    //console.log(password)
    this.setState({
      password:password
    })
  } */

  submitForm = ()=>{
    console.log(this.state)
  }

  render(){
    return(
      <form>
      <input
      onChange={(ev)=>{this.syncChanges(ev.target.value,"email")}} 
      type="email"
      value={this.state.email}
      placeholder="Email"/>

      <input
      onChange ={(ev)=>{this.syncChanges(ev.target.value,"password")}}
      type="password"
      value={this.state.password}
      placeholder="******"/>

      <div>
      <input
      onClick ={this.submitForm}
      type="submit"
      placeholder="Click to me"/>
      </div>
      </form>
    )
  }
}


class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
       <Formulario/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
