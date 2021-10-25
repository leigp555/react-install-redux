import React from 'react';
import ReactDOM from 'react-dom';
const root = document.getElementById("root")


const context=React.createContext(null)
const App=()=>{
    const [n,setN]=React.useState(0)
    return (
        <context.Provider value={{n,setN}}>
        <Son/>
        </context.Provider>
    )
}
const Son=()=>{
    const {n,setN}=React.useContext(context)
    const onClick=()=>{
        setN(x=>x+1)
    }
    return (
        <div>
            {n}
            <button onClick={onClick}>+1</button>
        </div>
    )
}
ReactDOM.render(<App/>,root)