import React from 'react'
import './About.css'
import { NavLink } from 'react-router-dom'

const About = () => {
  return (
    <div class="about">
    <div class="container">
        <div class="about__wrapper">
            <h2 class="about__title">
                Привет, меня зовут Дьулустаан и я фронтэнд разработчик!
            </h2>
            <p class="about__text">
                Коротко обо мне. Владею основнымми технологиями веб-разработки, а если чем то не владею быстро этому обучаюсь. Могу разобраться в чужом коде, этот навык я приобрел когда работал код ревьювером в IT-школе. Благодоря навыку разбираться в коде я пишу чистый и аккуратный код. Если вас заинтересовала моя писанина и если у вас есть достойное предложение, можете обратиться по этим<span> <NavLink to='/contact'>контактам.</NavLink></span> 
            </p>
            <p class="about__text">
                Стек моих навыков:
            </p>
            <p class="about__text">
                HTML5, CSS3(scss), Адаптивная верстка, JavaScript(ES6), React, Redux, ReduxToolKit, Tailwind, Bootstrap 
            </p>
        </div>
    </div>
</div>
  )
}

export default About