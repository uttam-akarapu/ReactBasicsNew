import React, { Component } from 'react';
import PropTypes from 'prop-types';
import commonCounter from "../HOCDemo/commonCounter";

class ClickCounter extends Component {
    
    render() {
        const {count , incrementCount} =this.props;

        return (
            <div>
                <hr/>
                <h2>HOC - Higher Order Components : <p>It is a pattern useful in sharing common functionality between components</p></h2>
                <p>Syntax would look like this : const NewComponent = higherOrderComponent(originalComponent)</p>
                <p>Ex: const IRON-MAN = withSuit(Tony Stark)</p>
                <button onClick={incrementCount}> Clicked <b>{count}</b> times</button>
                <p>{this.props.name} : this Value is passed here not directly from App.js , it goes to HOC and from there it comes here.We declare '...this.props' spread operator in wrappedComponent in HOC to take other props coming from App.js</p>
                
            </div>
        );
    }
}

ClickCounter.propTypes = {

};

export default commonCounter(ClickCounter,2);