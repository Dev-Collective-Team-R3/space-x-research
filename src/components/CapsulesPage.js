import React, { useState, useEffect } from 'react'

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
                            <div className="border w-1/2 mb-4" key={capsule.id}>
                                <div>Type: {capsule.type}</div>
                                <div>Status: {capsule.status}</div>
                                <div>Last Update: {capsule.last_update}</div>
                                <div>Reused: {capsule.reuse_count} time(s)</div>
                                <div>Water Landing: {capsule.water_landings} time(s)</div>
                                <ul>Launches:</ul>
                                    {capsule.launches.map(launch=><div>{launch}</div>)}
                            </div>
                        ))
                    ): "Loading..."
            }
        </div>
    )
}

export default CapsulesPage
