import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { increment,decrement,incrementbyamount } from '../../redux/slice/CounterSlice';

const Counter = () => {
  const [num,setnum] = useState(0);
  const dispatch = useDispatch();

  return (
    <div style={{width:"100%",textAlign:"center"}}>
        <button onClick={()=>dispatch(increment())} style={{width:"200px", height:"50px", fontSize:"40px"}}>Increase</button>
        <button onClick={()=>dispatch(decrement())} style={{width:"200px", height:"50px", fontSize:"40px"}} >decrease</button>
        <input style={{fontSize:"40px"}} type="text" value={num} onChange={(e)=>setnum(e.target.value)} />
        <button onClick={()=>dispatch(incrementbyamount(Number(num)))}>increment by amount</button>
    </div>
  )
}

export default Counter