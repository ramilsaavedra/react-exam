import React, { useState, useEffect } from 'react'
import List from './List';
import sampleData from '../sampleData/sampleData';

function TodoList() {
    const [todosState, setTodosState] = useState([]);

    useEffect(() => {
        setTodosState(sampleData)
    }, [])


    const onItemClick = (todo, event) => {
        const index = todosState.findIndex(todoState => todoState.id === todo.id);
        todosState[index] = {...todosState[index], [event.target.name]: event.target.value ? 1 : 0}
        setTodosState([...todosState])
    }

    return (
        <>
            <List todos={todosState} onItemClick={onItemClick}/>
        </>
    )
}

export default TodoList
