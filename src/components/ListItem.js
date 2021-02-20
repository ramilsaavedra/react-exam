import React from 'react'

function ListItem({todo, onChange}) {
    
    return (
        <label htmlFor={ 'check' + todo.id } className='list-item'>
            <span>{ todo.text }</span>
            <input type='checkbox' name='done' id={ 'check' + todo.id } checked={todo.done} onChange={(e) => {onChange(todo, e) } }/>
        </label>
    )
}

export default ListItem
