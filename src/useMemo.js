// import React, { useState} from 'react';
// import ReactDOM from 'react-dom';
// const root = document.getElementById("root")
//
// const App=()=>{
//     const [n,setN]=React.useState(0)
//     const [m,setM]=useState(1)
//     const addN=()=>{
//         setN(x=>x+1)
//     }
//     const addM=()=>{
//         setM(x=>x+1)
//     }
//     // const x=React.useMemo(()=>{
//     //     return addM
//     // },[m])
//     const y=React.useCallback(addM,[m])
//     console.log("App执行了")
//     return (
//         <div>
//             {n}
//             <button onClick={addN}>n+1</button>
//             <Son data={m} setM={y}/>
//         </div>
//     )
// }
// const Son=React.memo((props)=>{
//     console.log("Son执行了")
//     const setM=props.setM
//     return (
//         <div style={{marginTop:"50px"}}>
//             {props.data}
//             <button onClick={setM}>M=+1</button>
//         </div>
//     )
// })
// ReactDOM.render(<App/>,root)