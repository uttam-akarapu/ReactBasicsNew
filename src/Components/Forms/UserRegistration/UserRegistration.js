import React, { Component } from 'react';
import PropTypes from 'prop-types';

class UserRegistration extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cart: [],
            person: {      
            firstname:"",
            lastname :"",
            address : "",
            mobile :"",
            email :"",
            isTrueDetails : true
        }
        
        }

        

     
    }

    firstnameChangeHandler = (event) => {
        console.log(event.target.value);
        this.setState({
            person:[{ firstname:event.target.value}]
           
        })
        
    }
    lastnameChangeHandler = (event) => {
        console.log(event.target.value);
        this.setState({
            person:[{ lastname:event.target.value}]
           
        })
        
    }

    submitHandler = (event) =>{

        alert("firstname"+this.state.person.firstname + "lastname" +this.state.person.lastname);
        event.preventDefault();
        

    }

    
    render() {

        
     
const userdetails =  
                <div>
                    <form onSubmit = {this.submitHandler}>
                        <div>
                            <label>First Name :</label>
                        <input type="text" value={this.state.person.firstname} onChange={this.firstnameChangeHandler}/>
                        <p>{this.state.person.firstname}</p>
                        </div>
                        <div>
                            <label>Last Name :</label>
                        <input type="text" value={this.state.person.lastname} onChange={this.lastnameChangeHandler}/>
                        <p>{this.state.person.lastname}</p>
                        </div>
                        <input type="submit"/>
                    </form>
                </div>
                


        
        return (
            <div>
                
                {userdetails}
            </div>
        );
    }
}

UserRegistration.propTypes = {

};

export default UserRegistration;