import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteTodo, updateTodo } from '../actions/todoActions'

class Todos extends Component {
    render() {
        return (
            <div className="Todos">
                <h2>Todos</h2>
                <ul style={{listStyleType: 'none', paddingLeft: '0'}}>
                    { this.props.todos.map(todo => {
                        const { id, title, completed } = todo

                        return (
                            <li key={todo.id} style={{borderBottom: '1px solid #efefef', padding: '8px 10px', textDecoration: completed ? 'line-through' : ''}}>
                                <input
                                    type="checkbox"
                                    defaultChecked={completed}
                                    onChange={this.props.updateTodo.bind(this, id)}
                                />
                                { ' ' }
                                { title }
                                { ' ' }
                                <button style={delBtn} onClick={this.props.deleteTodo.bind(this, id)}>X</button>
                            </li>
                        )
                    }) }
                </ul>
            </div>
        )
    }
}

const delBtn = {
    backgroundColor: 'red',
    border: 0,
    borderRadius: '50%',
    padding: '4px 8px',
    float: 'right',
    cursor: 'pointer'
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteTodo: (id) => dispatch(deleteTodo(id)),
        updateTodo: (id) => dispatch(updateTodo(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos)
