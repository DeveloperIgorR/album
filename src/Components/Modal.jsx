import React from 'react'
import m from '../../src/Components/Modal.module.css'

const Modal = ({active, setActive, children})=>{
    return(
        <div className={active ? [m.modal, m.modalActive].join(" ") : m.modal} onClick={() => setActive(false)}>
            <div className={active? [m.content, m.contentActive].join(" ") : m.content} onClick={e => e.stopPropagation()}>
            {children}

            </div>
        </div>
    )
}
export default Modal