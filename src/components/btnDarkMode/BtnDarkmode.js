import React, { useEffect, useState } from 'react'
import './style.css'

const BtnDarkmode = () => {
    const [darkMode, setDarkMode] = useState('night')

    useEffect(() => {
        if(darkMode === 'night'){
            document.body.classList.add('night')
        }else{
            document.body.classList.remove('night')
        }
    }, [darkMode])



    const toggleDarkMode = () => {
        setDarkMode((currentValue) => {
            return currentValue === 'light' ? 'night' : 'light';
        })
    }



    return (
            <label id="switch" className="switch" >
                <input type="checkbox" id="slider" />
                <span className="slider round" onClick={toggleDarkMode}></span>
            </label>
    )
}

export default BtnDarkmode