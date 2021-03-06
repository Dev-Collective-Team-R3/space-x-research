import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';
import { fetchSingleItem } from '../../services/loadData';
import { FaYoutube, FaFilePdf, FaNewspaper, FaWikipediaW, FaRedditSquare } from 'react-icons/fa'
import ImageSlides from '../ImageSlides'
import Loading from '../Loading'
import GoBack from '../GoBack'

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

    const media_button_style = "px-3 py-1 border-pink-300 ml-2 text-pink-500 text-3xl flex items-center"
    const info_button_style = "rounded-full px-2 py-1 px-2 mx-1"
    const inner_text = "text-sm ml-1"

    return (
        <div className="ml-auto mr-auto">
            <GoBack />
            { launch ? (
                <div className="flex">
                    <div className="w-screen-1/2">
                        <div className="text-2xl text-center mb-3">{launch.name.toUpperCase()}</div>
                        <div className={`flex justify-center mb-3 text-xs`}>
                            <span className={ `border ${info_button_style} ${launch.upcoming ? "border-green-500 text-green-500" : "border-blue-500 text-blue-500"} ` }>
                                {launch.upcoming ? "future" : "launched"}
                            </span>
                            <span className={ `border ${info_button_style} ${!launch.upcoming && launch.success ? "border-green-500 text-green-500" : "border-blue-500 text-blue-500"} ` }>
                                {!launch.upcoming && launch.success ? "Success" : "Failed"}
                            </span>

                        </div>
                        <div className="flex justify-center mb-3">
                            { launch.links.webcast ? (<a href={launch.links.webcast} target="_blank" className={media_button_style}><FaYoutube /><span className={ inner_text }> YouTube</span></a>) : null}
                            { launch.links.presskit ? (<a href={launch.links.presskit} download className={media_button_style}><FaFilePdf /><span className={ inner_text }> Press kit</span></a>) : null}
                            { launch.links.article ? (<a href={launch.links.article} className={media_button_style}><FaNewspaper /><span className={ inner_text }> News</span></a>) : null}
                            { launch.links.wikipedia ? (<a href={launch.links.wikipedia} className={media_button_style}><FaWikipediaW /><span className={ inner_text }> Wikipedia</span></a>) : null}
                        </div>
                        <div className="flex justify-center mb-10">
                            { launch.links.reddit.launch ? (<a href={launch.links.reddit.launch} className={media_button_style}><FaRedditSquare /><span className={ inner_text }> Launch</span></a>) : null }
                            { launch.links.reddit.campaign ? (<a href={launch.links.reddit.campaign} className={media_button_style}><FaRedditSquare /><span className={ inner_text }> Campaign</span></a>) : null }
                            { launch.links.reddit.media ? (<a href={launch.links.reddit.media} className={media_button_style}><FaRedditSquare /><span className={ inner_text }> Media</span></a>) : null }
                            { launch.links.reddit.recovery ? (<a href={launch.links.reddit.recovery} className={media_button_style}><FaRedditSquare /><span className={ inner_text }> Recovery</span></a>) : null }
                        </div>
                        <div className="ml-4 mr-4">
                            <p>{launch.details}</p>
                        </div>
                        <div>

                        </div>
                    </div>
                    <div className="mb-5 w-screen-1/2">
                        <ImageSlides images={ launch.links.flickr.original } />
                    </div>
                </div>
            ): (<Loading />)}
        </div>
    )
}

export default LaunchCard
