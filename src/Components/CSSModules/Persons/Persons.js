import React from 'react';
import PersonStyles from "./Persons.module.css";
import PropTypes, { number } from 'prop-types';

const Persons = (props) => {
    return (
        <div>
            <h1>Persons Component</h1>
            <button className={PersonStyles.red}>Hover to change color</button>
            <b> Age is : {props.age} -- PropTypes example: used to specify datatype to the variables.</b>

            
        </div>
    );
};

Persons.propTypes = {
    age:PropTypes.number
};

export default Persons;