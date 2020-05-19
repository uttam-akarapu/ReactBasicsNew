import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RegComp from "../PureComp/RegComp";
import PureComp from "../PureComp/PureComp";
import MemoEx from "../Memo/MemoEx";

class ParentComp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name:"Uttam"
        }

    }

    
    componentDidMount() {

        
            this.setState({
                name:"Uttam"
            });
       

    }

    

    render() {
        console.log("parent component");
        return (
            <div>
                 <hr/>
                <h2>PureComponent : It prevents unnecessary re-rendering (Implements 'ShouldComponentUpdate' lifeCycle hook internally to check for changes) if there is no change in the components , Below is the example</h2>
                <p>Open the console and refresh the page , you see pure component rendering only once , while parent and Regular components keep rendering because of the setInterval method in parent component</p>
                <h3>Parent Class Component</h3>
                <RegComp 
                name={this.state.name}
                />
                <PureComp 
                name={this.state.name}
               />
                <hr/><h2>Memo Component : Implements Pure Component kind of functionality in functional components </h2>
                <MemoEx name={this.state.name}/>
            </div>
        );
    }
}

ParentComp.propTypes = {

};

export default ParentComp;