import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';
import { fetchSingleItem } from '../../services/loadData';

const LaunchCard = () => {
    const { launchid } = useParams()

    const [ launch, setLaunch ] = useState(null)

    useEffect(async ()=>{
        const data = await fetchSingleItem('launches', launchid)
        setLaunch(data)
    },[])

    
    return (
        <div className="ml-auto mr-auto mt-40">
            { launch ? (
                <div>
                    <div className="mb-5">
                        <img src={launch.links.flickr.original} alt="spacex launch" className="object-cover h-screen-3/4 w-2/3 ml-auto mr-auto" />
                        <div className="absolute left-1/2 bottom-5 w-100 flex">
                            <span className="border rounded-full px-3 py-2 bg-pink-500 border-pink-500 ml-2 text-white">{launch.upcoming ? "future" : "launched"}</span>
                            { launch.links.webcast ? (<a href={launch.links.webcast} target="_blank" className="border rounded-full p-2 text-white bg-pink-500 border-pink-500 px-3 py-2 ml-2">Webcast</a>) : null}
                            { launch.links.presskit ? (<a href={launch.links.presskit} download className="border rounded-full p-2 text-white bg-pink-500 border-pink-500 ml-2">Press</a>) : null}
                            { launch.links.article ? (<a href={launch.links.article} className="border rounded-full p-2 bg-pink-500 text-white border-pink-500 ml-2">News</a>) : null}
                            { launch.links.wikipedia ? (<a href={launch.links.wikipedia} className="border rounded-full p-2 bg-pink-500 text-white border-pink-500 ml-2">Wikipedia</a>) : null}
                        </div>
                    </div>
                    <div className="ml-4 mr-4">
                        <p>{launch.details}</p>
                    </div>
                </div>
            ): "Loading..."}
        </div>
    )
}

export default LaunchCard
