import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {fetchSingleItem} from '../../services/loadData'

const Rocket = () => {
    const { rocketid } = useParams()

    const [ rocket, setRocket ] = useState("")

    useEffect(async () => {
        const data = await fetchSingleItem('rockets', rocketid)
        setRocket(data)
    }, [])

    return (
        <div>
            <p>{rocket.name}</p>
            <p>{rocket.flickr_images.length}</p>
            <img src={rocket.flickr_images[0]} alt=""/>
        </div>
    )
}

export default Rocket
