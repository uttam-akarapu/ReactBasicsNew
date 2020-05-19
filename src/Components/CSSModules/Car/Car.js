import React from 'react';
import CarStyles from "./Car.module.css"

const Car = () => {
    return (
        <div>
            <h1>Car Component</h1>
            <button className={CarStyles.blue}>Hover to change color</button>
        </div>
    );
};

export default Car;