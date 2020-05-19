import React from 'react';

const Hero = (props) => {
    if(props.name == "Joker"){
        throw new Error("Not a Hero !");
    }
    return (
        <div>
            <hr/>
            <h3>Error Handling Demo : We acheive it using getDerivedStateFromError or componentDidCatch lifecycle hooks</h3>
             {props.name} <span>   (Un-comment the Joker named component in App.js to see the error handling effect)</span>
        </div>
    );
};

export default Hero;