import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UserB from "./UserB"

class UserA extends Component {
    constructor(props) {
        super(props);

    }

    

    render() {
        return (
            <div>
                <p> It has UserB inside UserA </p>
                <UserB/>
            </div>
        );
    }
}

UserA.propTypes = {

};

export default UserA;