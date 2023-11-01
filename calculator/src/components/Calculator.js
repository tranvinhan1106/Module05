import { Component } from "react";

class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstNumber: 0,
            secondNumber: 0,
            result: 0
        }
    }

    changeNumber = (props, value) => {
        this.setState({ [props]: parseInt(value) })
    }

    showResult = (expression) => {
        switch (expression) {
            case "+":
                this.setState({ result: this.state.firstNumber + this.state.secondNumber })
                break;
            case "-":
                this.setState({ result: this.state.firstNumber - this.state.secondNumber })
                break;
            case "*":
                this.setState({ result: this.state.firstNumber * this.state.secondNumber })
                break;
            case "/":
                this.setState({ result: this.state.firstNumber / this.state.secondNumber })
                break;
        }
    }
    render() {
        return (
            <div style={{textAlign: "center" }}>
                <fieldset style={{ width: 300 }}>
                    <legend>Calculator</legend>
                    <div>
                        <input type="text" onChange={(value) => this.changeNumber("firstNumber", value.target.value)}></input>
                    </div>
                    <div>
                        <input type="text" onChange={(value) => this.changeNumber("secondNumber", value.target.value)}></input>
                    </div>
                    <br />
                    <span>Result : </span>{this.state.result}
                    <br />
                    <button type="button " value='+' onClick={(expression) => this.showResult(expression.currentTarget.value)}>+</button> &nbsp;
                    <button type="button " value='-' onClick={(expression) => this.showResult(expression.currentTarget.value)}>-</button> &nbsp;
                    <button type="button " value='*' onClick={(expression) => this.showResult(expression.currentTarget.value)}>*</button> &nbsp;
                    <button type="button " value='/' onClick={(expression) => this.showResult(expression.currentTarget.value)}>/</button> &nbsp;

                </fieldset>
            </div>

        )
    }
}
export default Calculator;