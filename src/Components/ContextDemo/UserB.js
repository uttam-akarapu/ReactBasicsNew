import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UserContext from "./UserContext";
import UserC from "../ContextDemo/UserC";

class UserB extends Component {
    constructor(props) {
        super(props);

    }

    

    render() {
        return (
            <div>
               context is  {this.context}
                <UserC/>
            </div>
        );
    }
}

UserB.propTypes = {

};

UserB.contextType = UserContext;

export default UserB;