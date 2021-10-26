import React from 'react';
import ReactDOM from 'react-dom';
// 你可以直接获取 DOM button 的 ref：
const App = () => {
    // const ref = React.createRef();               与下面写法等价
     const ref = React.useRef(null);
    return (
        <FancyButton ref={ref}>Click me!</FancyButton>
    )

}


const FancyButton = React.forwardRef((props, ref) => {
    console.dir(ref)                                   //打印出来是null不知道为什么但是不影响子组件引用父组件中的内容   //加个花括号就可以
    return (
        <button ref={ref} className="FancyButton">
            {props.children}
        </button>
    )
});


const rootElement = document.getElementById("root");
ReactDOM.render(<App/>, rootElement);
