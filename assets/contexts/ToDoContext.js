import React, {Component, createContext} from 'react';

export const ToDoContext = createContext();

class ToDoContextProvider extends Component {

    constructor(props) {
        super(props);
        this.state = {
            todos: [{task: 'do something'}],
        };
    }

    // create
    createToDo() {

    }

    // read
    readToDo() {

    }

    // update
    updateToDo() {

    }

    // delete
    deleteToDo() {

    }

    render() {
        return (
            <ToDoContext.Provider value={{
                ...this.state,
                createTodo: this.createToDo.bind(this),
                updateTodo: this.updateToDo.bind(this),
                deleteTodo: this.deleteToDo.bind(this),
            }}>
                {this.props.children}
            </ToDoContext.Provider>
        );
    }
}

export default ToDoContextProvider;
