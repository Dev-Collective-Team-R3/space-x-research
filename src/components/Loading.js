import React from 'react'

import RocketLoading from '../assets/loading.gif'

const Loading = () => {
    return (
        <div className="flex items-center justify-center">
            <img src={RocketLoading} alt="loading rocket launches" className="object-cover rounded-full" />
        </div>
    )
}

export default Loading
