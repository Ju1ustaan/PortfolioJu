import React, { useState } from 'react'
import Cards from '../components/card/Cards'
import { projects } from '../helpers/projectList'
import Pagination from '../components/Pagination'

import './Project.css'

const Project = () => {

    // пагинация 
    const [currentPage, setCurrentPage] = useState(1)
    const [cardPerPage] = useState(3)

    const lastCardIndex = currentPage * cardPerPage
    const firstCardIndex = lastCardIndex - cardPerPage
    const currentCard = projects.slice(firstCardIndex, lastCardIndex)

    const paginate = pageNumber => setCurrentPage(pageNumber)
   

    return (
        <section class="projects">
        <div class="container">
            <div class="projects__wrapper">
                <p class="project__title">Проекты</p>
                <div class="projects__cards">
                    <Cards projects={currentCard} />
                </div>
                <Pagination cardPerPage={cardPerPage} totalCard={projects.length} paginate={paginate} />
            </div>
        </div>

    </section>
    )
}

export default Project