import React, { useState, useEffect } from 'react'
import TodoList from './TodoList';
import sampleData from '../sampleData/sampleData';

function HomePage() {
    const [todosState, setTodosState] = useState([]);

    useEffect(() => {
        setTodosState(sampleData)
    }, [])


    const onItemClick = (todo, event) => {
        const index = todosState.findIndex(todoState => todoState.id === todo.id);
        todosState[index] = {...todosState[index], done: true}
        alert('Task done');
        setTodosState([...todosState])
    }

    return (
        <>
            <TodoList todos={todosState} onItemClick={onItemClick}/>
        </>
    )
}

export default HomePage
