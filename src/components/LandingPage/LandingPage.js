import React from 'react'
import SpaceXVideo from '../../assets/spacex_med.mp4'

const LandingPage = () => {
    return (
        <div>
            <video autoPlay loop muted style={{ position: "fixed", width: "100vw", marginLeft: "auto", marginRight: "auto", padding: 0 }}>
                <source src={SpaceXVideo} type="video/mp4" />
            </video>
        </div>
    )
}

export default LandingPage
