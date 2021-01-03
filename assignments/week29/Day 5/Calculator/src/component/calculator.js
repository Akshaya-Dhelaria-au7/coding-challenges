import React, { Component, Fragment } from 'react';

class Calculator extends Component{
    state={
        value:''
    }
    
    render(){
        return(
            <Fragment>
                <h3>Calculator</h3>
                <input value={this.state.value}></input>
                <br />
                <br />
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button>*</button>
                <br />
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>-</button>
                <br />
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>+</button>
                <br />
                <button>0</button>
                <button>.</button>
                <button>=</button>
                <button>C</button>
                <br />
            </Fragment>
        )
    }
}

export default Calculator