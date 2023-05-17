import React from 'react'

import './Cards.css'

const Cards = ({ projects }) => {
    return (
        <>
            {
                projects.map((el) => (
                    <div className="projects__card">
                        <div className="projects__image">
                            <img src={el.img} alt={el.title}/>
                        </div>
                        <p className="projects__text">{el.title}</p>
                        <button className="projects__btn">
                            <a className="projects__btn" rel="noreferrer" href={el.gitHubLink} target='_blank'>Смотреть</a>
                        </button>
                    </div>
                ))
            }
        </>

    )
}

export default Cards