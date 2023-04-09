import React from 'react'

import './Cards.css'

const Card = ({ projects }) => {
    return (
        <>
            {
                projects.map((projects, i) => (
                    <div className="project__card">
                        <div className="project__img">
                            <img src={projects.img} alt="yanki" />
                        </div>
                        <div className="project__info">
                            <div className="project__desk">
                                {projects.title}
                            </div>
                            <button>
                                <a href={projects.gitHubLink} target='_blank'>GitHub</a>
                            </button>
                        </div>
                    </div>
                ))
            }
        </>

    )
}

export default Card