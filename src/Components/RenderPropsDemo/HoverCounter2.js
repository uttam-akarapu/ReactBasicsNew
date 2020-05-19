import React, { Component } from 'react';
import PropTypes from 'prop-types';

class HoverCounter2 extends Component {
      

    render() {
        const {count,incementClickHandler} = this.props;
        return (
            <div>
                <p onMouseOver={incementClickHandler}> COUNT : <b>{count}</b>-- Hover over me to increment the count</p>
            </div>
        );
    }
}

HoverCounter2.propTypes = {

};

export default HoverCounter2;