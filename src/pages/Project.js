import React, { useState } from 'react'
import Cards from '../components/card/Cards'
import { projects } from '../helpers/projectList'
import Pagination from '../components/Pagination'

import './Project.css'

const Project = () => {
    // филтрация 
    const [filterData, setFilterData] = useState(projects)

    const handleOnRemove = (item) => {
        if (projects.length !== filterData.length) {
            setFilterData(projects)
        } else {
            const removeItemFromList = (item) => {
                const newDataSet = filterData.filter((it) => {
                    return it.skills === item
                })
                setFilterData(newDataSet)
            }
            removeItemFromList(item)
        }
    }

    // all projects 
    const handleOnRemoveAll = () => {
        setFilterData(projects)
    }
    // пагинация 
    const [currentPage, setCurrentPage] = useState(1)
    const [cardPerPage] = useState(4)

    const lastCardIndex = currentPage * cardPerPage
    const firstCardIndex = lastCardIndex - cardPerPage
    const currentCard = filterData.slice(firstCardIndex, lastCardIndex)

    const paginate = pageNumber => setCurrentPage(pageNumber)


    return (
        <section className="project">
            <div className="container">
                <div className="project__wrapper">
                    <div className="project__warpper-left">
                        <h2 className="project__title animate__animated animate__fadeInLeft" onClick={handleOnRemoveAll}>
                            projects
                        </h2>
                        <div className="project__nav">



                            <a href="#" className="project__link" onClick={() => handleOnRemove('HTML, CSS')}>
                                <svg width="90" height="90" viewBox="0 0 100 100" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M18.4437 85.0031L11.4219 6.25H88.5781L81.5469 84.9906L49.9531 93.75L18.4437 85.0031Z"
                                        fill="#E44F26" />
                                    <path d="M50 87.0562L75.5312 79.9781L81.5375 12.6906H50V87.0562Z" fill="#F1662A" />
                                    <path
                                        d="M50 41.8969H37.2188L36.3375 32.0062H50V22.3469H25.7812L26.0125 24.9406L28.3844 51.5562H50V41.8969ZM50 66.9812L49.9562 66.9937L39.2 64.0906L38.5125 56.3875H28.8156L30.1688 71.55L49.9562 77.0437L50 77.0312V66.9812Z"
                                        fill="#EBEBEB" />
                                    <path
                                        d="M49.9656 41.8969V51.5562H61.8594L60.7406 64.0844L49.9656 66.9906V77.0406L69.7688 71.55L69.9125 69.9187L72.1813 44.4906L72.4188 41.8969H49.9656ZM49.9656 22.3469V32.0062H73.2969L73.4906 29.8375L73.9313 24.9406L74.1625 22.3469H49.9656Z"
                                        fill="white" />
                                </svg>
                                <svg width="90" height="90" viewBox="0 0 100 100" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M18.4437 85.0031L11.425 6.25H88.575L81.5469 84.9906L49.9531 93.75L18.4437 85.0031Z"
                                        fill="#1572B6" />
                                    <path d="M50 87.0562L75.5312 79.9781L81.5375 12.6906H50V87.0562Z" fill="#33A9DC" />
                                    <path
                                        d="M50 41.2219H62.7812L63.6625 31.3313H50V21.6719H74.2188L73.9875 24.2625L71.6156 50.8813H50V41.2219Z"
                                        fill="white" />
                                    <path
                                        d="M50.0594 66.3062L50.0156 66.3187L39.2594 63.4125L38.5719 55.7094H28.875L30.2281 70.875L50.0125 76.3687L50.0594 76.3562V66.3062Z"
                                        fill="#EBEBEB" />
                                    <path
                                        d="M61.9594 50.4719L60.7969 63.4062L50.025 66.3125V76.3625L69.825 70.875L69.9719 69.2437L71.65 50.4719H61.9594Z"
                                        fill="white" />
                                    <path
                                        d="M50.0344 21.6719V31.3313H26.7032L26.5094 29.1594L26.0688 24.2625L25.8375 21.6719H50.0344ZM50 41.2219V50.8813H39.3781L39.1844 48.7094L38.7469 43.8125L38.5156 41.2219H50Z"
                                        fill="#EBEBEB" />
                                </svg>


                            </a>
                            <a href="#" className="project__link" onClick={() => handleOnRemove('JavaScript, HTML, CSS')}>
                                <svg width="90" height="90" viewBox="0 0 100 100" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.25 6.25H93.75V93.75H6.25V6.25Z" fill="#F5DE19" />
                                    <path
                                        d="M65.0281 74.6094C65.7736 76.1237 66.9319 77.3966 68.3694 78.2812C69.807 79.1659 71.4653 79.6263 73.1531 79.6094C76.5593 79.6094 78.7375 77.9062 78.7375 75.5469C78.7375 72.7344 76.5 71.7281 72.75 70.0875L70.6937 69.2063C64.7562 66.6781 60.8187 63.5125 60.8187 56.8188C60.8187 50.6531 65.5062 45.9563 72.8593 45.9563C75.2397 45.7844 77.6179 46.3171 79.6975 47.488C81.777 48.6589 83.4658 50.4162 84.5531 52.5406L78.125 56.65C77.7063 55.5966 76.9773 54.6954 76.0346 54.0659C75.092 53.4363 73.9803 53.1082 72.8469 53.125C72.3524 53.0755 71.853 53.1295 71.3805 53.2837C70.9081 53.4379 70.4729 53.6887 70.1028 54.0204C69.7326 54.352 69.4356 54.7571 69.2307 55.2098C69.0258 55.6626 68.9174 56.1531 68.9125 56.65C68.9125 59.1156 70.4406 60.1156 73.9687 61.65L76.025 62.5313C83.0125 65.5281 86.9625 68.5812 86.9625 75.4469C86.9625 82.85 81.1469 86.9062 73.3375 86.9062C70.2947 87.1001 67.2608 86.4093 64.6019 84.9171C61.943 83.4249 59.7728 81.1951 58.3531 78.4969L65.0281 74.6094ZM35.9812 75.3219C37.2719 77.6125 38.4468 79.55 41.2718 79.55C43.9718 79.55 45.6781 78.4938 45.6781 74.3844V46.425H53.9V74.4937C53.9 83.0062 48.9 86.8813 41.6219 86.8813C39.0492 87.0219 36.4942 86.3807 34.2927 85.0421C32.0913 83.7035 30.3464 81.7301 29.2875 79.3813L35.9812 75.3219Z"
                                        fill="black" />
                                </svg>

                            </a>
                            <a href="#" className="project__link" onClick={() => handleOnRemove('React, Tailwind')}>
                                <svg width="90" height="90" viewBox="0 0 100 100" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_5631_18)">
                                        <path
                                            d="M76.5625 0H23.4375C10.4933 0 0 10.4933 0 23.4375V76.5625C0 89.5067 10.4933 100 23.4375 100H76.5625C89.5067 100 100 89.5067 100 76.5625V23.4375C100 10.4933 89.5067 0 76.5625 0Z"
                                            fill="#242938" />
                                        <path
                                            d="M50.0004 57.4028C54.0254 57.4028 57.2879 54.1399 57.2879 50.1153C57.2879 46.0906 54.0254 42.8278 50.0004 42.8278C45.9758 42.8278 42.7129 46.0906 42.7129 50.1153C42.7129 54.1399 45.9758 57.4028 50.0004 57.4028Z"
                                            fill="#00D8FF" />
                                        <path
                                            d="M50.0008 35.2981C59.7852 35.2981 68.8746 36.702 75.7281 39.0618C83.9855 41.9043 89.0625 46.2133 89.0625 50.1153C89.0625 54.1813 83.682 58.759 74.8145 61.6969C68.1105 63.918 59.2887 65.0774 50.0008 65.0774C40.4781 65.0774 31.4605 63.9891 24.6809 61.6723C16.1035 58.7407 10.9375 54.104 10.9375 50.1153C10.9375 46.245 15.7852 41.9692 23.9266 39.1309C30.8055 36.7325 40.1191 35.2981 49.9992 35.2981H50.0008Z"
                                            stroke="#00D8FF" stroke-width="8.911" />
                                        <path
                                            d="M37.102 42.7492C41.9903 34.2734 47.7469 27.1008 53.2149 22.343C59.8024 16.6098 66.0719 14.3644 69.4516 16.3133C72.9738 18.3445 74.2516 25.293 72.3668 34.4422C70.943 41.359 67.5391 49.5801 62.8988 57.6262C58.1414 65.8754 52.6942 73.1434 47.3008 77.8574C40.4762 83.823 33.8781 85.982 30.4231 83.9894C27.0703 82.0574 25.7883 75.7211 27.3969 67.2504C28.7559 60.093 32.1664 51.3082 37.1004 42.7492H37.102Z"
                                            stroke="#00D8FF" stroke-width="8.911" />
                                        <path
                                            d="M37.1141 57.6476C32.2121 49.1812 28.8746 40.6101 27.4817 33.4969C25.8047 24.9262 26.9903 18.3734 30.3672 16.4187C33.8864 14.3812 40.5438 16.7445 47.5289 22.9469C52.8102 27.6359 58.2332 34.6894 62.8867 42.7277C67.6578 50.9691 71.2336 59.3187 72.6246 66.3453C74.3848 75.2375 72.9602 82.0316 69.5082 84.0297C66.159 85.9687 60.0297 83.916 53.4942 78.2918C47.9723 73.5402 42.0645 66.1984 37.1141 57.6476Z"
                                            stroke="#00D8FF" stroke-width="8.911" />
                                    </g>
                                    <defs>
                                        <path id="clip0_5631_18">
                                            <rect width="100" height="100" fill="white" />
                                        </path>
                                    </defs>
                                </svg>

                            </a>
                        </div>
                    </div>
                    <div className="project__warpper-right">
                        <h2 class="project__title-adaptive" onClick={handleOnRemoveAll} >
                            Projects
                        </h2>
                        <div className='project__mobile'>
                            <ul className='project__nav-mobile'>
                                <li className='project__link-mobile' onClick={() => handleOnRemove('HTML, CSS')}>Верстка</li>
                                <li className='project__link-mobile' onClick={() => handleOnRemove('JavaScript, HTML, CSS')}>Java Script</li>
                                <li className='project__link-mobile' onClick={() => handleOnRemove('React, Tailwind')}>React</li>
                            </ul>
                        </div>
                        <div className="project__carusel">
                            <Cards projects={currentCard} />
                        </div>
                        <Pagination cardPerPage={cardPerPage} totalCard={filterData.length} paginate={paginate} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Project