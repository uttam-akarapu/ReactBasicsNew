import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { UserConsumer } from './UserContext';

class UserC extends Component {
    constructor(props) {
        super(props);

    }

    

    render() {
        return (
            <div>
                <hr/>
                <h2>Context Demo </h2>
                <h4>UserC component</h4>
                <UserConsumer>
                    {
                        (name) => {
                            return (
                                <div > 
                                    This value -- {name} -- is provided from the UserContext to Component UserC which is inside UserB which inturn resides in UserA
                                    
                                </div>
                            )
                        }

                    }
                </UserConsumer>
            </div>
        );
    }
}

UserC.propTypes = {

};

export default UserC;