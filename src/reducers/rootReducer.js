import { v4 as uuidv4 } from 'uuid'

const initState = {
    todos: [
        {
            id: 1,
            title: 'Lean Angular Framework',
            completed: true
        },
        {
            id: 2,
            title: 'Lean Django Framework',
            completed: false
        },
        {
            id: 3,
            title: 'Lean Spring Framework',
            completed: false
        }
    ]
}

const rootReducer = (state = initState, action) => {
    if(action.type === 'ADD_TODO') {
        let newTodo = {
            id: uuidv4(),
            title: action.title,
            completed: false
        }
        let todos = [...state.todos, newTodo]
        
        return {
            ...state,
            todos: todos
        }
    } else if(action.type === 'DELETE_TODO') {
        let todos = state.todos.filter(todo => todo.id !== action.id)

        return {
            ...state,
            todos: todos
        }
    } else if(action.type === 'UPDATE_TODO') {
        let todos = state.todos.map(todo => {
            if(todo.id === action.id) {
                todo.completed = !todo.completed
            }

            return todo
        })

        return {
            ...state,
            todos: todos
        }
    }
    
    return state;
}

export default rootReducer;
