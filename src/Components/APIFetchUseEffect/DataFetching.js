import React , {useState,useEffect} from 'react';
import axios from "axios";

const DataFetching = () => {

    const [posts,setPosts] = useState([]);
    const[errorMsg , setErrorMsg] = useState('');
    const[postId,setPostId] = useState(1);
    const [buttonClickID,setButtonClickId] = useState(1);

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(res => {
            console.log(res);
            setPosts(res.data);
        })
        .catch(error =>{
            console.log(error);
            setErrorMsg("Error Retrieving Data");
        })

    },[buttonClickID])

    const handleClick =()=>{
        setButtonClickId(postId)
    }


    return (
        <div>
            <hr/>
            <h2>Http Request using useEffect </h2>
            <p>provide empty array as 2nd parameter to use effect to avoid rerendering of component</p>
            <input type="text" value={postId} onChange={(e)=>setPostId(e.target.value)}/>
            <button onClick={handleClick}>Search</button>
          
            <ul>
           {/* {posts.map(post=>{
                return(
                <li>{post.title}</li>
                )

            })}*/}
                
                
               <li>{posts.title}</li>
       
            
            </ul>
            
        </div>
    );
};

export default DataFetching;