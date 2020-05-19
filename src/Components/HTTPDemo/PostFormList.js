import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from "axios";

class PostFormList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userID:'',
            title:'',
            body:''
        }

    }

    

    componentDidMount() {
       

    }

    changeHandler = (event) => {

        this.setState({
            [event.target.name]:event.target.value
           
        })
    }

    submitHandler =(event) =>{
        event.preventDefault();
        console.log(this.state);
        axios.post("https://jsonplaceholder.typicode.com/posts",this.state)
        .then(response =>{
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        })
       
    }
    

    render() {
        const {userID,title,body} = this.state;
        return (
            <div>
                <hr/>
                <h4>POST form submission </h4>
                <form onSubmit={this.submitHandler}>
                    <div>
                       User ID : <input type="text" name="userID" value={userID} onChange={this.changeHandler}/>
                    </div>
                    <div>
                        Title : <input type="text" name="title" value={title} onChange={this.changeHandler}/>
                    </div>
                    <div>
                       Body : <input type="text" name="body" value={body} onChange={this.changeHandler}/>
                    </div>
                    <button className="btn btn-primary">SUBMIT</button>
                </form>

            </div>
        );
    }
}

PostFormList.propTypes = {
    
};

export default PostFormList;