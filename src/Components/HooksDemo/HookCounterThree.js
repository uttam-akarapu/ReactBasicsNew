import React , {useState} from 'react';

const HookCounterThree = () => {

    const [name ,setName] = useState({firstname:'',lastname:''})

    return (
        <div>
            <hr/>
            <p>useState example 2</p>
            <form>
            First Name :<input type="text" value={name.firstname} onChange = {(e)=>setName({...name,firstname:e.target.value})}/>
            Last Name :<input type="text"  value={name.lastname} onChange = {(e)=>setName({...name,lastname:e.target.value})}/>
            <h3>{name.firstname}-{name.lastname} </h3>
            <h2>{JSON.stringify(name)}</h2>
            </form>
            
        </div>
    );
};

export default HookCounterThree;