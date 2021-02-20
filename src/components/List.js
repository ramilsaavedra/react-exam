import React, { useState } from 'react'
import ListItem from './ListItem';
import PropTypes from 'prop-types'


function List({todos}) {
    const [todosState, setTodosState] = useState(todos);

    const onItemClick = (todo, event) => {

        if(todo.done === 0) {
            const index = todosState.findIndex(todoState => todoState.id === todo.id);
            todosState[index] = {...todosState[index], [event.target.name]: event.target.value ? 1 : 0}
            setTodosState([...todosState])
        } else {
            console.log('task is already done')
        }
    }

    return (
        <div className='list'>
            { 
                todosState.map((todo, index) => (
                    <ListItem key={index} todo={todo} onChange={onItemClick}/>
                ))
            }
        </div>
    )
}

List.propTypes = {
    todos: PropTypes.array,
}

export default List
