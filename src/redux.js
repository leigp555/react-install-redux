import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';

const root = document.getElementById("root")

const store = {
    user: null,
    books: null,
    hobby: null
}
const reducer = (state, {type, data}) => {
    if (type === "updateUser") {
        return {
            ...state,
            user: {...data}
        }

    } else if (type === "updateBooks") {
        return {
            ...state,
            books: [...data]
        }

    } else if (type === "updateHobby") {
        return {
            ...state,
            hobby: [...data]
        }

    } else {
        throw new Error("错误类型")
    }
}
const context = React.createContext(null)
const App3 = () => {
    const [data, dispatcher] = React.useReducer(reducer, store)
    const value = {data, dispatcher}
    return (
        <context.Provider value={value}>
            <div style={{marginTop: "50px"}}>
                <User/>
                <Books/>
                <Hobby/>
            </div>
        </context.Provider>
    )
}
const User = () => {
    const {data, dispatcher} = React.useContext(context)
    useEffect(() => {
        ajax("/user").then((response) => {
            dispatcher({type: "updateUser", data: response})
        })
    }, [dispatcher])
    return (
        <div style={{marginTop: "50px"}}>
            <span>个人信息:</span>
            <span>{data.user ? data.user.name : "加载中"}</span>
        </div>
    )
}

const Books = () => {
    const {data, dispatcher} = React.useContext(context)
    useEffect(() => {
        ajax("/books").then((response) => {
            dispatcher({type: "updateBooks", data: response})
        })
    }, [dispatcher])
    return (
        <div style={{marginTop: "50px"}}>
            <span>喜欢的书籍:</span>
            <ol>
                {data.books ? data.books.map(book => <li key={book.id}>{book.name}</li>) : "加载中"}
            </ol>
        </div>
    )
}
const Hobby = () => {
    const {data, dispatcher} = React.useContext(context)

    useEffect(() => {
            ajax("/hobby").then((response) => {
                console.log(response)
                dispatcher({type: "updateHobby", data: response})
            })
        }, [dispatcher]
    )
    return (
        <div style={{marginTop: "50px"}}>
            <span>个人爱好:</span>
            {data.hobby ? data.hobby.map(hobby => <li key={hobby.id}>{hobby.name}</li>) : "加载中"}
        </div>
    )
}

const ajax = (url) => {
    return new Promise((resolve, reject) => {
        if (url === "/user") {
            setTimeout(() => {
                resolve({name: "lgp"})
            }, 1000)

        } else if (url === "/books") {
            setTimeout(() => {
                resolve([
                        {
                            id: 1,
                            name: "JavaScript高级程序设计"
                        },
                        {
                            id: 2,
                            name: "你不知道的javascript"
                        },
                        {
                            id: 3,
                            name: "农夫与蛇"
                        }
                    ]
                )
            }, 2000)
        } else if (url === "/hobby") {
            setTimeout(() => {
                resolve([
                    {
                        id: 1,
                        name: "踢足球"
                    },
                    {
                        id: 2,
                        name: "打篮球"
                    },
                    {
                        id: 3,
                        name: "好吃的"
                    }
                ])
            },3000)

        }
    })
}
ReactDOM.render(<App3/>, root)