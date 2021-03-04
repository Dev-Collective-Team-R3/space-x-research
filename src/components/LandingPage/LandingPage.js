import React from 'react'
import SpaceXVideo from '../../assets/spacex_med.mp4'
import Poster from '../../assets/cover.jpg'

const LandingPage = () => {
    return (
        <div className="">
            <video 
                autoPlay 
                loop 
                muted
                preload='true'
                className="hidden h-screen w-screen mx-auto object-cover laptop:block"
            >
                <source src={SpaceXVideo} type="video/mp4"/>
            </video>
            <img src={Poster} 
                alt="space cover for smaller screen" 
                className="object-cover h-screen max-w-screen w-screen mx-auto m-0 laptop:hidden" 
            />
        </div>
    )
}

export default LandingPage
