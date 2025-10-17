import {Link} from "react-router-dom";  //Link Component

function NotFound(){
  return(
    <>
        <h2>Error 404, Page Not Found</h2>
        <p>Unexpected Application Error!
          Hey developer 👋</p>
          {/*sends request to server and link is invoked, needed net*/}
          <a className="btn btn-primary" href="/">Home</a>
          {/*Link handled by an browser router */}
          <Link className = "btn btn-danger" to="/"> Home</Link>
    </>
  )
}

export default NotFound