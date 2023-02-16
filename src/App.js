import { useEffect, useState } from 'react';
import './App.css';


const Card = ({id,title,body})=>{
  return (
  <div className = "container">
    <strong>id:</strong>{id} <br/>
    <strong>title:</strong> {title} <br/>
    <strong>body:</strong>{body}
  </div>
  )
}


function App() {
  const [posts,setPosts] = useState([])
  

  useEffect(()=>{
 fetch("https://jsonplaceholder.typicode.com/posts").then((response)=>response.json()).then((data)=>setPosts(data))
  },[])

  return (
    <div className="App">
    {posts && posts.length>0 && posts.map((postsObj,index)=>{
     return (<Card key = {postsObj.id} 
          id={postsObj.id}
          title={postsObj.title}
          body={postsObj.body}
    

    />)})}

    </div>
  )
}

export default App;
