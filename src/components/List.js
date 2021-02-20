import React from 'react'
import ListItem from './ListItem';
import PropTypes from 'prop-types'
;


function List({todos, onItemClick}) {

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

List.propTypes = {
    todos: PropTypes.array,
    onItemClick: PropTypes.func
}

export default List
