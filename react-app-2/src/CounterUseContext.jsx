import {useEffect , useState , useContext} from 'react'
import {dataContext} from './HomeCreateContext'

function CounterUseContext(){   {/*here props is an value from an loginonchange which he gets from an his parent HomeAbortController */}
  const[count, setCount] = useState(0);

  
  const data = useContext(dataContext);

  function inc(){
      setCount(preCount => preCount + 1);
      setCount(preCount => preCount + 1);
  }

  useEffect(() => {
    console.log(count);
  },[count]);       {/*here count is an dependency array*/}

  return (
    <>
      <h2>{data}</h2>  {/*this not shown in this parent page of CounterUseContext shows this*/}
      <h2 className = 'm-5'>count : {count}</h2>
      <button className='mx-5 btn btn-primary' onClick={inc}>Increment</button>
    </>
  )
}
export default CounterUseContext;



