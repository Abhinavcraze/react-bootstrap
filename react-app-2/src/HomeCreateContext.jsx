import { useState, useEffect, createContext } from "react";
import { Link } from "react-router-dom";
import CounterUseContext from './CounterUseContext'; // Import the component that will consume the context
import LoginUseContext from './LoginUseContext';

// It's a good practice to provide a default value to createContext, although not strictly necessary here.
export const dataContext = createContext(null);

function HomeCreateContext() {
  const [posts, setPosts] = useState(null);

  const data = "Data to pass to children and grandChildren components";

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetch('http://localhost:3001/posts', { signal })
      .then(response => {
        return response.json()
      })
      .then((data) => {
        console.log(data);
        setPosts(data);
      })
      .catch(err => {
        // Don't log abort errors
        if (err.name === 'AbortError') {
          console.log('Fetch aborted');
        } else {
          console.log(err);
        }
      });

    // Cleanup function
    return () => {
      console.log('unMounted Cleaning Up!');
      controller.abort();
    }
  }, []);

  return (
    <div className="container">
      <Link to='/login'>Login</Link>

      {/* The Provider now wraps the component that needs the context data */}
      <dataContext.Provider value={data}>
          <CounterUseContext /> 
          <br/>
          <h2>Login page</h2>
          <br/>
          <LoginUseContext />
      </dataContext.Provider>

      <div className="row justify-center m-3">
        {posts && posts.map(post => {
          return (
            <div key={post.id} className="card m-3" style={{ width: '18rem' }}>
              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.content}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default HomeCreateContext;

{/*To connect with a json  ---> npx json-server --watch data/db.json --port 3001 --static ./data*/}