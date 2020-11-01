import React, { Component } from 'react'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
import './App.css'

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>React Redux Todo</h1>
                <AddTodo />
                <Todos />
            </div>
        )
    }
}

export default App
