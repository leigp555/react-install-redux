// import React from 'react';
// import ReactDOM from 'react-dom';
// // 你可以直接获取 DOM button 的 ref：
// const App = () => {
//     // const ref = React.createRef();               与下面写法等价
//     const ref = React.useRef(null);
//     return (
//         <FancyButton style={{className:"red"}} ref={ref}>Click me!</FancyButton>
//     )
//
// }
// const FancyButton = React.forwardRef((props, ref) => {
//     //console.dir(ref)     //这样是打印不出来的
//     //第二个参数 ref 只在使用 React.forwardRef 定义组件时存在。常规函数和 class 组件不接收 ref 参数，且 props 中也不存在 ref。
//     //Ref 转发不仅限于 DOM 组件，你也可以转发 refs 到 class 组件实例中。
//
//     return (
//         <>
//             <div ref={ref}>
//                 <span>你好呀</span>
//                 {props.children}
//             </div>
//             <div>
//                 <span>我是你大爷</span>
//             </div>
//         </>
//     )
// });
// const rootElement = document.getElementById("root");
// ReactDOM.render(<App/>, rootElement);
// //用不明白


import React, {useEffect, useLayoutEffect} from 'react';
import ReactDOM from 'react-dom';
const App3 = () => {
    const ref = React.useRef(null);
    useLayoutEffect(()=>{
        ref.current.innerText="你大爷"
    })
    return (
        <FancyButton style={{className:"red"}} ref={ref}>Click me!</FancyButton>
    )

}
const FancyButton = React.forwardRef((props, ref) => {
    return (
        <>
            <div><span>xxx</span></div>
            <div ref={ref}>
                <span>你好</span>
            </div>

        </>
    )
});
const rootElement = document.getElementById("root");
ReactDOM.render(<App3/>, rootElement);
