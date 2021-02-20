import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button/Button'

function ListItem({todo, onChange}) {
    
    return (
        <div className='list-item'>
            <span>{ todo.text }</span>
            <Button disabled={todo.done ? true : false} onClick={!todo.done ? (e) => {onChange(todo, e)} : () => {}}>
                Done
            </Button>
        </div>
    )
}

ListItem.propTypes = {
    todo: PropTypes.object.isRequired,
    onChange: PropTypes.func
}

export default ListItem
