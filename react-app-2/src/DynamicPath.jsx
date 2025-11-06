import {useState , useEffect , createContext} from "react";
import {useNavigate} from "react-router-dom"


export const dataContext = createContext();

function DynamicPath (){

  const navigate = useNavigate();
  const [posts,setPosts] = useState(null);
  const data = "Data";

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetch('http://localhost:3001/posts',{signal})
    .then(response => {
      return response.json()
    })
    .then((data) => {
      console.log(data);
      setPosts(data);
    }).catch(err=>{
      console.log(err);
    })

    //cleanup function
    return () => {
      console.log('unMounted, cleaning up');
      controller.abort();
    }
  },[]);

  return(
    <div className="container">
      <dataContext.Provider value={data}>

      </dataContext.Provider>
      <div className="row justify-center m-3">
        {posts && posts.map(post => {
          return (
            <div key={post.id} className="card m-3" style={{ width: '18rem' }} onClick={() => {navigate('/post/' + post.id)}}>
              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default DynamicPath