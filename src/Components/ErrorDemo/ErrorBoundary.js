import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError : false
        }

    }

    static getDerivedStateFromError (error){
        return {
            hasError:true
        }

    }

   componentDidCatch(error,info){
       console.log("Error is "+error);
       console.log("Info is "+info);
   }

    render() {
        if(this.state.hasError){
            return <h2>Something went wrong in {this.props.error} component</h2>
        }
        return this.props.children
    }
}

ErrorBoundary.propTypes = {

};

export default ErrorBoundary;