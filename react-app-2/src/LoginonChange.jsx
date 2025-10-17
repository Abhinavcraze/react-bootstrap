import {useState} from 'react'
import { Link } from "react-router-dom";

import CounterUpdaterFunc from './CounterUpdaterFunc'; {/*For performing Props Drillng*/}

function LoginonChange(props){

  const[pwd1 , setPwd1] = useState("");
  const[pwd2 , setPwd2] = useState("");
  const[same , setSame] = useState(false);

  function handlePwd1Change (event){
    setPwd1(event.target.value);
    console.log(event.target.value);
    {/*console.log(event);*/}
  }

  function handlePwd2Change (event){
    setPwd2(event.target.value);   {/*async function */}
    console.log(event.target.value);  
    if(pwd1 == event.target.value){
      console.log("Password matches");
      setSame(true);
    }
    else{
      console.log("Password didn't matched");
      setSame(false);
    }  
    {/*console.log(event);*/}
    {/*console.log(pwd1,pwd2)*/}
  }

  function handlePasswordCheck(event){
    console.log(event.target.value);
  }
  
  const data = props.value;  {/*get an data from an home to give to an child component via props drilling method */}

  return(
    <>
    <div className="container">
      <CounterUpdaterFunc value={data}/>    {/*For performing Props Drilling*/}
      <Link to='/'>Home</Link>
      {/*To make a content in center ---> margin : "auto" */}
      {/*get it from bootstrap form in docs */}
      <form className="my-5" style={{width : "50%" , margin : "auto"}}>
        <div className="mb-3">{/*my -->margin y-axis , mb --> margin-bottom */}
          <label className="form-label">Email address</label>
          <input type="email" className="form-control" autoComplete="username"/>
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input value={pwd1} type="password" onChange={handlePwd1Change} className="form-control" autoComplete="new-password"/>
        </div>
        <div className="mb-3">
          <label className="form-label">Confirm Password</label>
          <input value={pwd2} type="password" onChange={handlePwd2Change} className="form-control" autoComplete="new-password"/>
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input"  onChange={handlePasswordCheck}/>
          <label className="form-check-label">I agree</label>
        </div>
        {same && <p>Password matches</p>}
        {/*{!same && <p>Password didn't matches</p>}*/}
        <button type="submit" className="btn btn-primary">Create an Account</button>
      </form>
    </div>
    </>
  );
}
export default LoginonChange;