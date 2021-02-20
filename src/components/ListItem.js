import React from 'react'
import PropTypes from 'prop-types'

function ListItem({todo, onChange}) {
    
    return (
        <label htmlFor={ 'check' + todo.id } className='list-item'>
            <span>{ todo.text }</span>
            <input type='checkbox' name='done' id={ 'check' + todo.id } checked={todo.done} onChange={!todo.done ? (e) => {onChange(todo, e)} : () => {}}/>
        </label>
    )
}

ListItem.propTypes = {
    todo: PropTypes.object.isRequired,
    onChange: PropTypes.func
}

export default ListItem
