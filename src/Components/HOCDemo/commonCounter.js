import React, { Component } from 'react';

const commonCounter = (WrappedComponent,incrementNumber) =>{
    class NewCounter extends Component{
        constructor(props) {
            super(props);
    
            this.state={
                count:0
            }
    
        }
    
        incrementcountHandler=()=>{
            this.setState(prevState =>{
               return{ count:prevState.count+incrementNumber}
            })
        }

        render(){
            return(
                <WrappedComponent 
                count={this.state.count}
                incrementCount = {this.incrementcountHandler}
                {...this.props}
                />

            )

        }
    
    }

    return NewCounter;


}

export default commonCounter;