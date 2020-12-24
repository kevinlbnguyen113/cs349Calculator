import logo from './logo.svg';
import './App.css';
import Keypad from  './components/Keypad'
import { Component } from 'react';
import OnScreen from './components/OnScreen';


class App extends Component{
  state= {
    result: ''
  }
  buttonClicked = buttonkey =>{
    if (buttonkey === "="){
      this.calculation();
    }
    else if (buttonkey === "Clear"){
      this.clearAll();
    }
    else
    
    this.setState({

      result: this.state.result+buttonkey
    });
  };
  calculation= ()=>{
    this.setState({
      result: eval(this.state.result)
    })
  }
  clearAll=() =>{
    this.setState({
      result: ''
    })
  }

  render(){
  return (
    <div className="App">
      <div className= "result">
      <OnScreen result={this.state.result} />
      <Keypad buttonClicked = {this.buttonClicked}/>
      </div>
    </div>
  );
}
}
export default App;
