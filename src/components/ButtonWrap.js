import React, { useState } from 'react'
import Button from './Button/Button';

function ButtonWrap() {
    const [ isDisable , setIsDisable ] = useState(false);

    const disableTrigger = () => {
        setIsDisable(!isDisable);
    }

    return (
        <div className='button-wrap'>
            <Button disabled={isDisable}>Close Shipment</Button>
            <br/>
            <Button onClick={() => disableTrigger()}>{ isDisable ? 'Enable' : 'Disable'}{' Button'}</Button>
        </div>
    )

}

export default ButtonWrap
