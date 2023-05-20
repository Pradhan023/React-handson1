import React from 'react'
import './App.css';
import Fcomp from './functionalcomp';
import Ccomp from './classcomp';

class App extends React.Component{
constructor(){
  super();
  this.state={
    funrender:false,
    classrender:false
  }
}

  render(){
    return(
    <div className = "App">
      <h1 className='h1'> Styling using Functional and Class Component</h1>
      <div className='btn'>
      <button onClick={()=>this.setState({funrender: !this.state.funrender})}>To see styling in functional Component</button>
      <button onClick={()=>this.setState({classrender: !this.state.classrender})}>To see styling in class Component</button>
      </div>
    
      {this.state.funrender ?<Fcomp/>:null}
      {this.state.classrender ?<Ccomp/>:null}
    </div>
    )
  }
}

export default App;
