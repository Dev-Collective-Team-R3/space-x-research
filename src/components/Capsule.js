import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom';

import Dragon from '../assets/dragon_alt.png'
import { fetchSingleItem } from '../services/loadData'
import Loading from './Loading'
import GoBack from './GoBack'

const Capsule = () => {

    const { capsuleid } = useParams()

    const [ capsule, setCapsule ] = useState(null)

    useEffect(async ()=>{
        const data = await fetchSingleItem('capsules', capsuleid)
        setCapsule(data)
    },[])
    
    return (
        <div className="ml-auto mt-40 mr-auto">
            <GoBack />
            {
                capsule ? 
                (
                    <div className="flex justify-center items-center row-reverse">
                        <div className="w-1/2 h-24 rounded-full p-5">
                            <img src={Dragon} alt="dragon logo" className="object-cover" />
                        </div>
                        <table className="w-1/2">
                            <tbody>
                                <tr>
                                    <td className="text-right w-1/2 pr-4">Type</td>
                                    <td className="text-left w-1/2">{capsule.type}</td>
                                </tr>
                                <tr>
                                    <td  className="text-right w-1/2 pr-4">Status</td>
                                    <td className="text-left w-1/2">{capsule.status}</td>
                                </tr>
                                <tr>
                                    <td className="text-right w-1/2 pr-4">Serial Number</td>
                                    <td className="text-left w-1/2">{capsule.serial}</td>
                                </tr>
                                <tr>
                                    <td className="text-right w-1/2 pr-4">Reused</td>
                                    <td className="text-left w-1/2">{capsule.reuse_count} {parseInt(capsule.reuse_count) > 1 ? "times" : "time"}</td>
                                </tr>
                                <tr>
                                    <td className="text-right w-1/2 pr-4">Water Landing</td>
                                    <td className="text-left w-1/2">{capsule.water_landings} {parseInt(capsule.water_landings) > 1 ? "times" : "time"}</td>
                                </tr>
                                <tr>
                                    <td className="text-right w-1/2 pr-4">Land Landing</td>
                                    <td className="text-left w-1/2">{capsule.land_landings} {parseInt(capsule.land_landings) > 1 ? "times" : "time"}</td>
                                </tr>
                                <tr>
                                    <td className="text-right w-1/2 pr-4">Launches</td>
                                    <td className="text-left w-1/2">
                                        { capsule.launches.length > 0 ? 
                                            capsule.launches.map(launch=><div key={launch}><Link to={`/launches/${launch}`}>{launch}</Link></div>) 
                                            : "Never used in a launch" }
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                ): (<Loading />)
            }
        </div>
    )
}

export default Capsule
