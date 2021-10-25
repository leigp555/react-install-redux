import React from 'react';
import ReactDOM from 'react-dom';
const root = document.getElementById("root")

const App = () => {
    const [m, setM] = React.useState({
        user: {
            name: "lgp",
            age: 18,
            gender: "male"
        },
        phone: "110"
    })
    const onClick = () => {
        setM({
            ...m,
            user: {
                ...m.user,
                name: "xxx"
            }
        })
    }
    return (
        <>
            <div>
                {m.user.name}
            </div>
            <button onClick={onClick}> 换名字</button>
        </>
    )
}

ReactDOM.render(<App/>,root)