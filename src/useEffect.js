import React from 'react';
import ReactDOM from 'react-dom';
const root = document.getElementById("root")

const Father=()=>{
    return (
        <>
            <Son/>
        </>
    )
}



const Son=()=>{
    const [m,setM]=React.useState(0)
    const onClick=()=>{
        setM(m=>m+1)
    }
    React.useEffect(()=>{
        console.log("你好")
    },[])
    React.useEffect(()=>{
        console.log("我是你大爷")
    },[m])
    // React.useEffect(()=>{
    //    document.getElementById("xxx").innerText="大爷"
    // })
    React.useLayoutEffect(()=>{
        document.getElementById("xxx").innerText="大娘"
    })


    return (
        <div>
            <span>useEffect</span>
            {m}
            <button id="xxx" onClick={onClick}>点击</button>
        </div>
    )
}
ReactDOM.render(<Father/>,root)