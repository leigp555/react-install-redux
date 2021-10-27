import React, { useRef, useState, useEffect } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
    const MovableButton = movable(Button2);
    const buttonRef = useRef(null);
    useEffect(() => {
        console.log(buttonRef.curent);
    });
    return (
        <div className="App">
            <MovableButton name="email" ref={buttonRef}>
                按钮
            </MovableButton>
        </div>
    );
}

// function Button2(props) {
//   return <button {...props} />;
// }

const Button2 = React.forwardRef((props, ref) => {
    return <button ref={ref} {...props} />;
});

// 仅用于实验目的，不要在公司代码中使用
function movable(Component) {
    function Component2(props, ref) {
        console.log(props, ref);
        const [position, setPosition] = useState([0, 0]);
        const lastPosition = useRef(null);
        const onMouseDown = e => {
            lastPosition.current = [e.clientX, e.clientY];
        };
        const onMouseMove = e => {
            if (lastPosition.current) {
                const x = e.clientX - lastPosition.current[0];
                const y = e.clientY - lastPosition.current[1];
                setPosition([position[0] + x, position[1] + y]);
                lastPosition.current = [e.clientX, e.clientY];
            }
        };
        const onMouseUp = () => {
            lastPosition.current = null;
        };
        return (
            <div
                className="movable"
                onMouseDown={onMouseDown}
                onMouseMove={onMouseMove}
                onMouseUp={onMouseUp}
                style={{ left: position && position[0], top: position && position[1] }}
            >
                <Component {...props} ref={ref} />
            </div>
        );
    }
    return React.forwardRef(Component2);
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
