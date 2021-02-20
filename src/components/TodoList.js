import React from 'react'
import ListItem from './ListItem';
import PropTypes from 'prop-types';


function TodoList({todos, onItemClick}) {

    return (
        <div className='list'>
            { 
                todos.map((todo, index) => (
                    <ListItem key={index} todo={todo} onChange={onItemClick}/>
                ))
            }
        </div>
    )
}

TodoList.propTypes = {
    todos: PropTypes.array,
    onItemClick: PropTypes.func
}

export default TodoList
