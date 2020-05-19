import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CounterComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count:0
        }

    }


    incementClickHandler = () => {
        this.setState(prevState => {
            return {count:prevState.count+2}
        })
    }
   
    

    render() {
        return (
            <div>
                {this.props.render(this.state.count , this.incementClickHandler)}
            </div>
        );
    }
}

CounterComponent.propTypes = {

};

export default CounterComponent;