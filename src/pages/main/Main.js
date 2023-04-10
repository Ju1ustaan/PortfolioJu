import React from 'react'
import rectangle from '../../assets/main__rectangle.png' 
import './Main.css'

const Main = () => {
  return (
     <main className="main">
        <div className="container">
            <div className="main__wrapper">
                <div className="main__left-wrapper">
                    <p className="main__desk animate__animated animate__fadeInDown">
                        frontend devoloper
                    </p>
                    <h1 className="main__title animate__animated animate__fadeInLeft">
                        Привет<span>,</span> меня зовут <span>Дьулустаан</span>
                    </h1>
                    {/* <button className="main__btn animate__animated animate__fadeInUp"> */}
                        <a className="main__btn animate__animated animate__fadeInUp" href='https://drive.google.com/file/d/1j3sr7TVEPPjrAejW7RC5IRh2bnw_pzA1/view?usp=sharing' target='_blank'>cv</a> 
                    {/* </button> */}
                </div>
                <div className="main__right-wrapper">
                    <div className="main__img">
                        <img src={rectangle} alt="rainbow circle"/>
                    </div>

                </div>
            </div>
        </div>
    </main>
  )
}

export default Main