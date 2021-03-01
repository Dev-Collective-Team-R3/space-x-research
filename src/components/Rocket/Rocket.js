import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {fetchSingleItem} from '../../services/loadData'
import { Link } from "react-router-dom"

const Rocket = () => {
    const { rocketid } = useParams()

    const [ rocket, setRocket ] = useState("")

    const [ imageCounter, setImageCounter ] = useState(0)

    const handleClick = () =>{
        imageCounter+1 < rocket.flickr_images.length ? setImageCounter(imageCounter+1) : setImageCounter(0)
    }

    useEffect(async () => {
        const data = await fetchSingleItem('rockets', rocketid)
        setRocket(data)
    }, [])

    return (
        <div className="flex flex-col m-20">
            
            { 
                rocket ? 
                (<div className="flex">
                    <div className="flex-col w-1/2 mr-2">
                        <h2 className="text-4xl">{rocket.name}</h2>
                        <div className="flex items-baseline">
                            <div 
                                className={`border rounded-full p-1 text-xs m-3 ml-0
                                    ${rocket.active ? 'border-green-500 text-green-500' : 'border-red-500 text-red-500'}`}
                            >
                                    {rocket.active ? "Active" : "Not-active"}
                            </div>
                            <a className="border rounded-full p-1 text-xs border-black" href={rocket.wikipedia} target="_blank">Wikipedia</a>
                        </div>
                        <p className="mt-5">{rocket.description}</p>
                        <table className="table-auto border border-black mt-5 ml-5">
                            <tbody>
                                <tr>
                                    <td className="border border-black p-2">Stages</td>
                                    <td className="border border-black p-2">{rocket.stages}</td>
                                </tr>
                                <tr>
                                    <td className="border border-black p-2">Boosters</td>
                                    <td className="border border-black p-2">{rocket.boosters}</td>
                                </tr>
                                <tr>
                                    <td className="border border-black p-2">First Flight</td>
                                    <td className="border border-black p-2">{rocket.first_flight}</td>
                                </tr>
                                <tr>
                                    <td className="border border-black p-2">Height</td>
                                    <td className="border border-black p-2">{rocket.height.meters} meters</td>
                                </tr>
                                <tr>
                                    <td className="border border-black p-2">Diameter</td>
                                    <td className="border border-black p-2">{rocket.diameter.meters} meters</td>
                                </tr>
                                <tr>
                                    <td className="border border-black p-2">Mass</td>
                                    <td className="border border-black p-2">{rocket.mass.lb} lbs</td>
                                </tr>
                                <tr>
                                    <td className="border border-black p-2" >Success Rate</td>
                                    <td className="border border-black p-2" >{rocket.success_rate_pct}</td>
                                </tr>
                                <tr>
                                    <td className="border border-black p-2" >Cost per launch</td>
                                    <td className="border border-black p-2" >{rocket.cost_per_launch/1000000} Million</td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                    <div className="w-1/2 shadow-lg cursor-pointer" onClick={handleClick}>
                        <img src={rocket.flickr_images[imageCounter]} alt="spacex rockets" className="object-cover h-screen" />
                    </div>
                </div>) : 
                (<div>"Loading..."</div>)
            }
            <Link to="/rockets" className="border border-pink-500 rounded-full w-20 p-1 text-center mt-10">Go Back</Link>
        </div>
    )
}

export default Rocket
