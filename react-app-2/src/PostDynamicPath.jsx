import {useParams} from "react-router-dom";
import {useState , useEffect} from "react";

function PostDynamicPath(){

  const[post , setPost] = useState(null);
  const {id} = useParams();


  useEffect(() => {
    fetch('http://localhost:3001/posts/'+id)
    .then(response => {
        return response.json()
    })
    .then((data) => {
      console.log(data);
      setPost(data);
    })
    .catch(err => {
      console.log(err);
    })
  },[id])



  return(
    <div>
      {post && <div className = "container m-5">
        <h2>Post : {id}</h2>
        <h3>{post.title}</h3>
        <p>{post.content}</p>
      </div> }
    </div>
  )
}

export default PostDynamicPath;


