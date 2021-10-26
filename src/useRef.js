import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';

const root = document.getElementById("root")

const App = () => {
    const count=React.useRef(0)
    const [n,setN]=useState(0)
    const onClick=()=>{
        setN(x=>x+1)
    }
    useEffect(()=>{
        count.current+=1
    })
    console.log(count.current)
    return (
        <div>
            {n}
            <button onClick={onClick}>n+1</button>
        </div>
    )
}
ReactDOM.render(<App/>,root)