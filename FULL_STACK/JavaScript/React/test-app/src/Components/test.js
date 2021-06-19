import React from "react";
//state : to store information about the particular state ,changes in state will trigger render function again
class Test extends React.Component {
    state = {
        val1: 0,
        val2: 0,
        sum: 0,
        pro: 0
    };
    render() {
        return (
            <div>
                <input
                    type={"number"}
                    placeholder={"Enter Number 1"}
                    onChange={(e) => {
                        this.setState({ val1: e.target.value })
                    }}
                />
                <br />
                <input
                    type={"number"}
                    placeholder={"Enter Number 1"}
                    onChange={(e) => {
                        this.setState({ val2: e.target.value })
                    }}
                />
                <br />
                <button onclick={() => {
                     this.setState({ sum: Number(this.state.val1) + Number(this.state.val2) }) }}> Add</button>
                <button onclick={() => { 
                    this.setState({ pro: Number(this.state.val1) * Number(this.state.val2) }) }}> Product</button>    
                
                <p>Sum of two numbers is: {this.state.sum}</p>
                <p>Product of two numbers is: {this.state.pro}</p>
            </div>
        )
    }
}

export default Test;