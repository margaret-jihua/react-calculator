import React, {Component} from 'react'

class Calculator extends Component {
    
    constructor (props){
        super()
        this.state = {
            num1: '',
            num2: '',
            operator: '',
            result: 'Operation results go here!'
        }
    }

    setNum = (e, num) => {
        this.setState({ [num]: e.target.value});
    }

    setOperator = (e, operator) => {
        this.setState({ [operator]: e.target.value})
    }

    calculate = () => {
        let num1 = Number(this.state.num1)
        let num2 = Number(this.state.num2)
        let operater = this.state.operator
        if (operater === '+') {
            let sum = num1 + num2
            this.setState({result:sum})
        } else if (operater === '-') {
            let subtract = num1 - num2
            this.setState({result:subtract})
        } else if (operater === '*') {
            let multiple = num1 * num2
            this.setState({result:multiple})
        }else if (operater === '/') {
            let divide = num1 / num2
            this.setState({result:divide})
        }
    }

    render() {
        return(
            <div className="container">
                <h1>Calculate with React!</h1>

                <div className="calculator">
                    <input type="number"
                        name="num1"
                        placeholder="n1"
                        value={this.state.num1}
                        onChange={ (e) => this.setNum(e, 'num1') }
                        />
                    <select onChange={(e) => this.setOperator(e, 'operator')}>
                        <option value='+'> + </option>
                        <option value='-'> - </option>
                        <option value='*'> * </option>
                        <option value='/'> / </option>
                    </select>
                    <input type="number"
                        name="num2"
                        placeholder="n2"
                        value={this.state.num2}
                        onChange={ (e) => this.setNum(e, 'num2') }
                        />
                    <button onClick={this.calculate}>=</button>

                    <h2>{this.state.result}</h2>
                </div>
            </div>
        )
    }
}

export default Calculator