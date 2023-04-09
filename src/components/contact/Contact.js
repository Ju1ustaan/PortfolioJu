import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <section class="contact">
    <div class="container">
        <div class="contact__wrapper">
            <h2 class="contact__title animate__animated animate__fadeInLeft">
                Контакты
            </h2>
            <div class="contact__info">
                <h3 class="contact__subtitle animate__animated animate__fadeInDown">
                    Местоположение
                </h3>
                <p class="contact__desk animate__animated animate__fadeInUp">
                    Bishkek, Kyrgyzstan
                </p>
                <h3 class="contact__subtitle animate__animated animate__fadeInDown">
                    Telegram / WhatsApp
                </h3>
                <a href="" class="contact__desk blue animate__animated animate__fadeInUp">
                    +996 221 158 535
                </a>
                <h3 class="contact__subtitle animate__animated animate__fadeInDown ">
                    Email
                </h3>
                <a href="" class="contact__desk blue animate__animated animate__fadeInUp">
                    luijulus@gmail.com
                </a>
            </div>
        </div>
    </div>
</section>
  )
}

export default Contact