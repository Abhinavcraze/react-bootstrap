{/* React router and link components */}
{/* props drilling */}

import {useState , useEffect} from "react";
import { Link } from "react-router-dom";

import Login from './LoginonChange';

function HomeAbortController(){
  const [posts, setPosts] = useState(null);

  const data = "Data to pass to children and grandChildren components";
  
  useEffect(() => {

      const controller = new AbortController();  {/*while including this 2 line need to return controller.abort */}
      const signal = controller.signal;

    
      fetch('http://localhost:3001/posts',{signal})
      .then(response =>{
        return response.json()
      })
      .then((data) =>{
        console.log(data);
        setPosts(data);
      })
      .catch(err => {
        console.log(err);
      })  


    //cleanup function
    return() => {
      console.log('unMounted Cleaning Up!');
      controller.abort();
    }
  },[])

  {/* get code from bootstrap card */}
  return(
    <div className="container">
      <Link to='/login'>Login</Link>

      <Login value={data}/>  {/*For performing Props Drilling Concept*/}
      <div className = "row justify-center m-3">
        {posts && posts.map(post => {
          return(
            <div key={post.id} className="card m-3" style={{width: '18rem'}}>
              <div className = "card-body">
                <h5 className = "card-title">{post.title}</h5>
                <p className = "card-text">{post.content}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default HomeAbortController;

{/*To connect with a json  ---> npx json-server --watch data/db.json --port 3001 --static ./data*/}