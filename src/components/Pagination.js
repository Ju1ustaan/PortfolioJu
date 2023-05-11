import React, { useState } from 'react'

const Pagination = ({ cardPerPage, totalCard, paginate }) => {
    const [activePaginate, setActivePaginate] = useState(1)
    const pageNumber = []

    for (let i = 1; i <= Math.ceil(totalCard / cardPerPage); i++) {
        pageNumber.push(i)
    }

    return (
        <div className='pagination'>
            <ul className='pagination__wrapper'>
                {
                    pageNumber.map(number => (
                        <li onClick={() => setActivePaginate(number)} className={activePaginate === number ? "active__paginate" : "pagination__number"} key={number}>
                            <a href='#' className='pagination__link' onClick={()=>paginate(number)}>{number}</a>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Pagination