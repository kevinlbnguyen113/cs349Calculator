import React , {Component} from 'react'


export class OnScreen extends Component{
    render(){
        return(
            <div className= "body">
                <p2>{this.props.result}</p2>
            </div>
        )
    }
}
export default OnScreen