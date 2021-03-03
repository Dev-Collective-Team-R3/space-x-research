import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';
import { fetchSingleItem } from '../../services/loadData';
import Loading from '../Loading'

const LaunchCard = () => {
    const { launchid } = useParams()

    const [ launch, setLaunch ] = useState(null)
    const [ imageCounter, setImageCounter ] = useState(0)

    useEffect(async ()=>{
        const data = await fetchSingleItem('launches', launchid)
        setLaunch(data)
    },[])

    const handleImageChange = () =>{
        imageCounter < launch.links.flickr.original.length - 1  ? setImageCounter(imageCounter+1) : setImageCounter(0)
    }

    
    return (
        <div className="ml-auto mr-auto mt-40">
            { launch ? (
                <div className="flex w-90 mx-auto">
                    <div className="mb-5 w-screen-1/2">
                        <img src={launch.links.flickr.original[imageCounter]} alt="spacex launch" className="object-cover h-screen-3/4 w-2/3 ml-auto mr-auto"  onClick={handleImageChange} />
                    </div>
                    <div className="w-screen-1/2">
                        <div className="text-2xl text-center mb-5">{launch.name}</div>
                        <div className="bottom-5 flex justify-center mb-10">
                            <span className="border rounded-full px-3 py-2 bg-pink-500 border-pink-500 ml-2 text-white">{launch.upcoming ? "future" : "launched"}</span>
                            { launch.links.webcast ? (<a href={launch.links.webcast} target="_blank" className="border rounded-full p-2 text-white bg-pink-500 border-pink-500 px-3 py-2 ml-2">Webcast</a>) : null}
                            { launch.links.presskit ? (<a href={launch.links.presskit} download className="border rounded-full p-2 text-white bg-pink-500 border-pink-500 ml-2">Press</a>) : null}
                            { launch.links.article ? (<a href={launch.links.article} className="border rounded-full p-2 bg-pink-500 text-white border-pink-500 ml-2">News</a>) : null}
                            { launch.links.wikipedia ? (<a href={launch.links.wikipedia} className="border rounded-full p-2 bg-pink-500 text-white border-pink-500 ml-2">Wikipedia</a>) : null}
                        </div>
                        <div className="ml-4 mr-4">
                            <p>{launch.details}</p>
                        </div>
                    </div>
                </div>
            ): (<Loading />)}
        </div>
    )
}

export default LaunchCard
