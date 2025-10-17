import {useEffect , useState , useRef} from 'react'


function CounterUseRef(){   {/*here props is an value from an loginonchange which he gets from an his parent HomeAbortController */}
  const[count, setCount] = useState(0);

  let refCount = useRef(100);

  function inc(){
      //setCount(count+1);   {/*this will update in webpage without this it will never update*/}
      refCount.current ++;
      console.log('refCount' + refCount.current);
  }

  useEffect(() => {
    //console.log(count);
    console.log(refCount);
  },[count]);       {/*here count is an dependency array*/}

  return (
    <>
      <h2 className = 'm-5'>count : {refCount.current}</h2>
      <button className='mx-5 btn btn-primary' onClick={inc}>Up</button>
      <button className='btn btn-secondary' onClick={() => {setCount(refCount.current)}}>Update</button>
    </>
  )
}
export default CounterUseRef;


{/*Use thiis if we no need to rerender the component  */}


