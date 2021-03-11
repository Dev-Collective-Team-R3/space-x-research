import React from 'react'
import SpaceXVideo from '../../assets/spacex_med.mp4'
import Poster from '../../assets/cover.jpg'

const LandingPage = () => {
    return (
        <div className="h-screen w-screen fixed inset-0">
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

            <div className="fixed z-10 border inset-y-1/2 w-screen h-screen-1/10 flex justify-center items-center bg-pink-100 opacity-60">
                <div className="text-3xl text-white text-pink-500 laptop:text-5xl">spaceXresearch</div>
            </div>
        </div>
    )
}

export default LandingPage
