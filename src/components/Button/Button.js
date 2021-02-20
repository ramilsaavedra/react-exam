import React from 'react'
import './Button.css'
import PropTypes from 'prop-types'

function Button({children, disabled, onClick}) {
    return (
        <button className='button' disabled={disabled} onClick={onClick}> 
            {children}
        </button>
    )
}

Button.propTypes = {
    disabled: PropTypes.bool,
    onClick: PropTypes.func
}

export default Button
