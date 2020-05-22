import React, { useState, useEffect } from 'react';

const EffectCounterDemo = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');

    useEffect(() => {
        console.log("in useeffect");
        document.title = `You clicked ${count} times`;
    }, [count]);

    return (
        <div>
            <hr />
            <p>useEffect Demo</p>
            <ol>
                <li>useEffect will always run after each render.</li>
                <li>All the functionalities inside useEffect will always render even though its not necessary , which can be avoided by the 2nd parameter in useEffect</li>
                <li>If you want to execute useEffect only once which is what <b>componentDidMount</b> does , just mention an empty array as the second parameter in useEffect method.</li>
            </ol>
            <p> Check the browser title to see useEffect functionality , i am updating browser title inside useEffect , so every render , useEffect runs .</p>
            <button onClick={() => setCount(count + 1)}>Count {count}</button>
            <input type="text" value={name} onChange={(e) => { setName(e.target.value) }} />
            <p>second parameter in useEffect function will help us not to execute useEffect if it is not changed.In this example [count] is the second parameter , in the console , it prints msg only when count changes i.e. when you click on the button</p>
            <pre>
                {`
                    const EffectCounterDemo = () => {
                    const [count , setCount]= useState(0);
                    const [name,setName] = useState('');

                    useEffect(() => {
                    console.log("in useeffect");
                    document.title = You clicked ${count} times;
                    },[count]);
                    `}

            </pre>
        </div>
    );
};

export default EffectCounterDemo;