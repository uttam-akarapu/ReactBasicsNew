import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class PureComp extends PureComponent {
    render() {
        console.log("Pure component");
        return (
            <div>
               
                 <span> Pure Component </span> Name is : {this.props.name}
            </div>
        );
    }
}

PureComp.propTypes = {

};

export default PureComp;