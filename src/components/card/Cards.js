import React from 'react'
import './Cards.css'

const Card = ({title, img, link}) => {
    return (
        <div class="project__card">
            <div class="project__img">
                <img src={img} alt="yanki" />
            </div>
            <div class="project__info">
                <div class="project__desk">
                    {title}
                </div>
            <button>
                <a href={link} target='_blank'>GitHub</a>
            </button>
            </div>
        </div>
    )
}

export default Card