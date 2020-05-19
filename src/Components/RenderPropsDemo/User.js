import React, { Component } from 'react';
import PropTypes from 'prop-types';

class User extends Component {
    constructor(props) {
        super(props);

    }

    

    render() {
        return (
            <div>
                <hr/>
                User.js file.

                Name is {this.props.name(false)} -- Part of Render Props demo below.            
            </div>
        );
    }
}

User.propTypes = {

};

export default User;