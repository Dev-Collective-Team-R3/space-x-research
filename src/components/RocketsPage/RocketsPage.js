import React, { useState, useEffect } from 'react'
import axios from "axios";

import Rocket from '../Rocket/Rocket'
import { Switch, Link, useRouteMatch, useParams, Route } from 'react-router-dom';

const RocketsPage = () => {

    const [ rockets, setRockets ] = useState([])
    
    useEffect(() => {
        loadRockets()
    }, [])

    const loadRockets = () => {
        (async () =>{
            const response = await axios.get("https://api.spacexdata.com/v4/rockets");
            setRockets(response.data)
        })()
    }

    return (
        <div className="mt-40 ml-40">
            <ul>
                {
                rockets.length > 0 ? (
                    rockets.map((rocket, index) => (
                        <li className="mt-5" key={index}>
                            <Link to={`/rockets/${rocket.id}`}>{rocket.name}</Link>
                        </li>
                    ))
                    ):'No rockets loaded'
                }
            </ul>
        </div>
    )
}

export default RocketsPage
