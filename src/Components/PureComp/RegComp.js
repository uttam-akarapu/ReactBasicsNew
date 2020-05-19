import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RegComp extends Component {
    constructor(props) {
        super(props);

    }

    

    render() {
        console.log("Regular component");
        return (
            <div>
                    <span>Regular Class Component</span> Name is : {this.props.name}
            </div>
        );
    }
}

RegComp.propTypes = {

};

export default RegComp;