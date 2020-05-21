import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ClassCounter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            counter:0
        }

    }

    componentDidMount() {

    }

    incrementCountHandler =()=>{
        this.setState(prevstate => {
            return { counter:prevstate.counter+1}
           
        })
    }

    render() {
        const {counter} = this.state;
        return (
            <div>
                <hr/>

                <h2>React Hooks Example </h2>
                <p> Below button functionality is implemented through class</p>
                <button onClick={this.incrementCountHandler}>{counter} </button>
            </div>
        );
    }
}

ClassCounter.propTypes = {

};

export default ClassCounter;