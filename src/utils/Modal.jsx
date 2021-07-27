import React from 'react'
import m from './Modal.module.css'

const Modal = ({active, setActive, inputData})=>{
    return(
        <div className={active? m.modal.active: m.modal} onClick={()=>setActive(false)}>
            <div className={active? m.content.active: m.content} onClick={e=>e.stopPropagation()}>
            {inputData}

            </div>
        </div>
    )
}
export default Modal