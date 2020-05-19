import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from "axios";

class GetList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts:[],
            errorMsg:''
        }

    }


   

    componentDidMount() {

        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(res => {
            console.log(res);
            this.setState({
                posts:res.data
            })
        })
        .catch(error =>{
            console.log(error);
            this.setState({
                errorMsg:"Error Retrieving Data , Please check your GET url once !"
            })
        })

       
    }

    

    render() {
        const {posts,errorMsg} = this.state;
        console.log("this.state.posts.length "+posts.length);

        return (
            <div>
                <hr/>
                <h2>Http Request Demo</h2>
                <h4> List of posts</h4>
                <table className="table">
                {posts.length ?
               
                    posts.map((post,index) => {
                        return( 
                                <tr key={index}>
                                    <td>{post.id}</td><td> {post.title}</td>
                                </tr>
                           
                        )

                    }):null
                
                }

                {errorMsg ? <td>{errorMsg}</td>:null}
                 </table>
            </div>
        );
    }
}

GetList.propTypes = {

};

export default GetList;