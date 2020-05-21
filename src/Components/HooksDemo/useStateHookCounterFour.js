import React,{useState, Fragment} from 'react';

const HookCounterFour = () => {

    const [items,setItems] = useState([]);

    const addItems = () =>{
        setItems([...items ,{id:items.length,name:"Uttam",value:20} ])
    }


    return (
        <div>

            <button onClick = {addItems} >Add Items Entered</button>
            <ul>
            {items.map(item => {
                return(
                    <Fragment>
                    <li key={item.id}>{item.value}</li>
                   <li key={item.id}>{item.name}</li>
                   </Fragment>
                )

            })
                
            }

            </ul>
            
        </div>
    );
};

export default HookCounterFour;