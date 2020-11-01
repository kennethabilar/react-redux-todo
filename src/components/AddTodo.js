import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions/todoActions'

class AddTodo extends Component {
    state = {
        title: ''
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title)
        this.setState({ title: '' })
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        return (
            <div>
                <h2>Add Todo</h2>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <label>Title</label>
                    { ' ' }
                    <input
                        type="text"
                        name="title"
                        value={this.state.title}
                        onChange={this.handleChange.bind(this)}
                    />
                    { ' ' }
                    <input type="submit" value="Add" />
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (title) => dispatch(addTodo(title))
    }
}

export default  connect(undefined, mapDispatchToProps)(AddTodo)
