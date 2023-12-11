import { Component } from "react";

class DemoState extends Component{
    constructor(){
        super();
        this.state = {
            numberValue  : 0 , 
            className : "A0223I1"
        }
    }
    changeValue = (value) => {
        this.setState({
            numberValue : value
        })
    }
    render(){
        return(
            <>
            <input onChange={(evt) => {this.changeValue(evt.target.value)}}></input>
            <h2> number :{this.state.numberValue}</h2>
            </>
        )
    }
}
export default DemoState;