import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { fetchMultipleSchema } from '../services/loadData'

const CapsulesPage = () => {

    const [ capsules, setCapsules ] = useState([])
    
    useEffect(async() => {
        setCapsules(await fetchMultipleSchema("capsules"))
    }, [])

    return (
        <div className="mt-40 ml-40">
            {
                capsules.length > 0 ? 
                    (
                        capsules.map(capsule=>(
                            <Link to={`/capsules/${capsule.id}`} className="border w-1/2 mb-4" key={capsule.id}>
                                <div>Type: {capsule.type}</div>
                                <div>Status: {capsule.status}</div>
                                <div>Last Update: {capsule.last_update}</div>
                                <div>Reused: {capsule.reuse_count} time(s)</div>
                                <div>Water Landing: {capsule.water_landings} time(s)</div>
                                <ul>Launches:</ul>
                                    {capsule.launches.map(launch=><div key={launch}>{launch}</div>)}
                            </Link>
                        ))
                    ): "Loading..."
            }
        </div>
    )
}

export default CapsulesPage
