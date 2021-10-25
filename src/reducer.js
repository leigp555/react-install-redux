import React from 'react';
import ReactDOM from 'react-dom';

const root = document.getElementById("root")


const initial = {
    user: {
        name: "lgp",
        age: 18,
        gender: "male"
    },
    phone: "110"
}

const reducer = (state, {type, payload}) => {            //注意第一个参数是值原始数据第二个参数包括操作以及操作类型这两个参数
    if (type === "update") {
        return ({
            ...state,
            user: {
                ...state.user,
                ...payload
            }
        })
    } else if (type === "reset") {
        return {...initial}                             //这里不能用...state因为state数据是最新的数据
    } else {
        throw new Error("Unknown")
    }
}
const App2 = () => {
    const [data, dispatcher] = React.useReducer(reducer, initial)
    const onClick = () => {
        dispatcher({type: "update", payload: {name: "xxx"}})
    }
    const reset=()=>{
        dispatcher({type:"reset"})
    }
    return (
        <>
            <div>
                {data.user.name}
            </div>
            <button onClick={onClick}>换名字</button>
            <button onClick={reset}>换名字</button>
        </>
    )
}
ReactDOM.render(<App2/>, root)