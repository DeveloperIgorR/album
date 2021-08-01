import React from 'react'
import createPages from '../../utils/Pagination'
import p from './Pagination.module.css'

const Pagination = (props) => {

    const totalPages = Math.ceil(props.totalCount / props.limit)
    const arr = []

    createPages(totalPages, props.pageNumber, arr)

    return (
        <div>
            {arr.map((id) => <button className={props.pageNumber == id ? p.active : p.none} 
                onClick={() => props.setLimit(id)} >{id}</button>)}
        </div>
    )
}
export default Pagination