import React , { Component } from 'react'

export default class Keypad extends Component{
    buttonClicked = event =>{
        this.props.buttonClicked(event.target.name);
    };

    
    render(){
        return(
            <div className= "buttons">
            <div>
            <button name= "7" onClick= {this.buttonClicked}>7</button>
            <button name= "8"onClick= {this.buttonClicked}>8</button>
            <button name= "9"onClick= {this.buttonClicked}>9</button>            
            <button name= "*"onClick= {this.buttonClicked}>*</button>
            </div>
            <div>
            <button name= "4"onClick= {this.buttonClicked}>4</button>
            <button name= "5"onClick= {this.buttonClicked}>5</button>
            <button name= "6"onClick= {this.buttonClicked}>6</button>
            <button name= "+"onClick= {this.buttonClicked}>+</button>
            </div>
            <div>
            <button name= "1"onClick= {this.buttonClicked}>1</button>
            <button name= "2"onClick= {this.buttonClicked}>2</button>
            <button name= "3"onClick= {this.buttonClicked}>3</button>
            <button name= "-"onClick= {this.buttonClicked}>-</button>
            </div>
            <div>
            <button name= "."onClick= {this.buttonClicked}>.</button>
            <button name= "0"onClick= {this.buttonClicked}>0</button>
            <button name= "="onClick= {this.buttonClicked}>=</button>
            
            <button name= "/"onClick= {this.buttonClicked}>/</button>
            </div>
            <div>
            <button name= "Clear"onClick= {this.buttonClicked}>CE</button>
            </div>
            </div>
        )
    }


}