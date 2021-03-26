import React from 'react';
import './Backdrop.scss';

type Props = {
    open: boolean,
    closeHandler: () => void
}

const Backdrop = ({open, closeHandler} : Props) => {
    const style = {
        display: open ? 'block' : 'none'
    }
    return (
        <div className='backdrop' onClick={closeHandler} style={style}></div>
    )
}

export default Backdrop;