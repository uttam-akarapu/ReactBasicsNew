import React,{useState} from 'react';

const HookCounter = () => {

const [count , setCount]= useState(2);



    return (
        <div>
            <p> the below value on the button is coming from the <b>useState</b> HOOK functionality in HookCounter.js file</p>
            <button onClick={() => setCount(count+1)}>Count {count}</button>
        </div>
    );
};

export default HookCounter;