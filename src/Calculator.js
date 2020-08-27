import React, {Component} from 'react'

class Calculator extends Component {
    constructor (props){
        super()
        this.state = {
            num1: '',
            num2: '',
            sum: 'Addition results go here!'
        }
    }

    setNum = (e, num) => {
        this.setState({ [num]: e.target.value});
    }

    add = () => {
        let num1 = Number(this.state.num1)
        let num2 = Number(this.state.num2)
        let sum = num1 + num2
        this.setState({sum:sum})
    }

    render() {
        return(
            <div className="container">
                <h1>Add with React!</h1>

                <div className="add">
                    <input type="number"
                        name="num1"
                        placeholder="Enter your first number"
                        value={this.state.num1}
                        onChange={ (e) => this.setNum(e, 'num1') }
                    />
                    <span>+</span>
                    <input type="number"
                        name="num2"
                        placeholder="Enter your second number"
                        value={this.state.num2}
                        onChange={ (e) => this.setNum(e, 'num2') }
                        />
                    <button onClick={this.add}>=</button>
                    <h3>{this.state.sum}</h3>
                </div>
            </div>
        )
    }
}

export default Calculator