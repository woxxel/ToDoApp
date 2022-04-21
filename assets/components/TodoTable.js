import React, {useContext} from 'react';
import {ToDoContext} from '../contexts/ToDoContext';

function TodoTable() {
    const context = useContext(ToDoContext)
    return (
        <div>
            <p>{context.todos.map((todo) => (
                <div>{todo.task}</div>
            ))}</p>
        </div>
    );
}

export default TodoTable;