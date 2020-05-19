import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ReactLifecycleHooks extends Component {
    constructor(props) {
        super(props);
        console.log("In constructor");

    }

    componentWillMount() {
        console.log("componentWIllMount");

    }

    componentDidMount() {
        console.log("componentDidMount");

    }

    componentWillReceiveProps(nextProps) {
        console.log("componentWillReceiveProps " + nextProps);

    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate");

    }

    componentWillUpdate(nextProps, nextState) {
        console.log("componentWillUpdate");


    }

    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate");

    }

    componentWillUnmount() {
        console.log("componentWillUnmount");

    }

    render() {
        console.log("render")
        return (
            <div>
                <h1>React Lifecycle hooks </h1>
            </div>
        );
    }
}

ReactLifecycleHooks.propTypes = {

};

export default ReactLifecycleHooks;