import React, {useEffect, useLayoutEffect} from 'react';
import ReactDOM from 'react-dom';
const App = () => {
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
ReactDOM.render(<App/>, rootElement);
