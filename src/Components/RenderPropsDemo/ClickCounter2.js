import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ClickCounter2 extends Component {
    
   

    render() {
        const {count,incementClickHandler} = this.props;
        return (
            <div>
                <hr/>
                <h2>Render Props Demo</h2>
                <button onClick={incementClickHandler}>Clicked {count} times</button>
            </div>
        );
    }
}

ClickCounter2.propTypes = {

};

export default ClickCounter2;