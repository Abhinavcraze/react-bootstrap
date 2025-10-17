import {useEffect , useState} from 'react'

function CounterUpdaterFunc(props){   {/*here props is an value from an loginonchange which he gets from an his parent HomeAbortController */}
  const[count, setCount] = useState(0);

  function inc(){
    {/*setCount(count+1);        //these both line get update from an 0 value so increases one by one
    setCount(count+1);*/}

    {/*console.log(count); */}      {/*it works as an async way bcoz,it's an set value */}

      {/*if we need to update parellely*/}
      setCount(preCount => preCount + 1);
      setCount(preCount => preCount + 1);
  }

  useEffect(() => {
    console.log(count);
  },[count]);       {/*here count is an dependency array*/}

  return (
    <>
      <h2>{props.value}</h2>{/*the value gets from an grandparent via props drilling method*/}
      <h2 className = 'm-5'>count : {count}</h2>
      <button className='mx-5 btn btn-primary' onClick={inc}>Increment</button>
    </>
  )
}
export default CounterUpdaterFunc;



