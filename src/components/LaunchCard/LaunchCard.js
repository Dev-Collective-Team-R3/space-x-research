import React from 'react'

import { useParams } from 'react-router-dom'

const LaunchCard = ({ launches }) => {
    const { launchid } = useParams()
    
    return (
        <div>
            {console.log(launchid)}
        </div>
    )
}

export default LaunchCard
