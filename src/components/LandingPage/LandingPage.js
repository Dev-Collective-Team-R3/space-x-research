import React from 'react'
import SpaceXVideo from '../../assets/spacex_med.mp4'
import Poster from '../../assets/cover.jpg'

const LandingPage = () => {
    return (
        <div className="h-screen w-screen fixed">
            <video 
                autoPlay 
                loop 
                muted
                preload='true'
                className="hidden mx-auto h-screen w-screen object-cover laptop:block"
            >
                <source src={SpaceXVideo} type="video/mp4"/>
            </video>
            <img src={Poster} 
                alt="space cover for smaller screen" 
                className="object-cover mx-auto m-0 h-screen w-screen laptop:hidden" 
            />
        </div>
    )
}

export default LandingPage
