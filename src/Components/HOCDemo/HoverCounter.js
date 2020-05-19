import React, { Component } from 'react';
import PropTypes from 'prop-types';
import commonCounter from "../HOCDemo/commonCounter";

class HoverCounter extends Component {
    
    render() {
        const {count , incrementCount} =this.props;
        return (
            <div>
                <span onMouseOver={incrementCount}>Hover here to increment <b>{count}</b></span> 
            </div>
        );
    }
}

HoverCounter.propTypes = {

};

export default commonCounter(HoverCounter,5);