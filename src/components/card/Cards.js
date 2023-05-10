import React from 'react'

import './Cards.css'

const Cards = ({ projects }) => {
    return (
        <>
            {
                projects.map((el) => (
                    <div class="projects__card">
                        <div class="projects__image">
                            <img src={el.img} alt={el.title}/>
                        </div>
                        <p class="projects__text">{el.title}</p>
                        <button class="projects__btn">
                            <a class="projects__btn" href={projects.gitHubLink} target='_blank'>Смотреть</a>
                        </button>
                    </div>
                ))
            }
        </>

    )
}

export default Cards