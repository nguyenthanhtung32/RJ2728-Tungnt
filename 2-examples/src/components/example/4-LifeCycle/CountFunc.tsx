import React, { useEffect, useRef, useState } from 'react'

type Props = {
};


function CountFunc(props : Props) {
    const [count , setCount] = useState(0)
    const timer = useRef<ReturnType<typeof setInterval>>();
    useEffect(() => {
        timer.current = setInterval(() => {
            setCount((prev)=>prev + 1);
        }, 1000);
    }, []);
    return <div>CountFunc : {count}</div>
    useEffect(()=>{
        console.log('ComponentDidUpdate');
      })
    
      useEffect(()=>{
        console.log('ComponentDidUpdate');
      },[count])
    }


export default CountFunc