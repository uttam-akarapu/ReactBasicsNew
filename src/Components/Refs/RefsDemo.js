import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RefsDemo extends Component {
    constructor(props) {
        super(props);

        this.inputRefs = React.createRef();

    }

  
    componentDidMount() {
        console.log(this.inputRefs);
        this.inputRefs.current.focus();

    }

    clickRefHandlerVal = () =>{
        alert("value is : "+ this.inputRefs.current.value);
    }

    render() {
        return (
            <div>
                <hr/>
                <h2> Refs : It focuses specific element using React.createRef object. </h2>
                <p>You can see below, i have made it focus on 2nd input when the page loads ex: "this.inputRefs.current.focus()"</p>
                <p> You can also use this feature to capture value ex: "this.inputRefs.current.value" . Type something in second input box and Click the button to see the value</p>
               <p> <input type="text" /></p>
                <input type="text" ref={this.inputRefs}/>
                <button className="btn btn-default" onClick={this.clickRefHandlerVal}>Click</button>
            </div>
        );
    }
}

RefsDemo.propTypes = {

};

export default RefsDemo;