import React from 'react'
import SpaceXVideo from '../../assets/spacex_med.mp4'

const LandingPage = () => {
    return (
        <div className="z-0">
            <video autoPlay loop muted style={{ position: "fixed", width: "100vw", marginLeft: "auto", marginRight: "auto" }}>
                <source src={SpaceXVideo} type="video/mp4" />
            </video>
        </div>
    )
}

export default LandingPage
