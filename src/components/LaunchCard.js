import React from 'react'

import { Link } from 'react-router-dom'

import Mars from '../assets/mars.png'

const LaunchCard = ({ launch }) => {

    const details_word_limit = 120;

    return (
        <div>
            { launch ? (
            <div className="flex flex-col items-center w-screen-1/4">
                <div className="w-40 h-1/4">
                    <img src={launch.links.patch.small ? launch.links.patch.small : Mars } alt="launch patch" className="object-contain" />
                </div>
                <h4 className="text-2xl my-5">{launch.name}</h4>
                <div className="mb-5 flex">
                    <div className={`border rounded-full py-1 px-3 text-xs text-center m-1 ${ launch.success ? "border-green-400 text-green-400" : "border-red-400 text-red-400"}`}>
                        Launch {launch.success ? "Successful" : "Failed"}
                    </div>
                    {launch.upcoming ? (<div className="border border-blue-400 rounded-full py-1 px-3 text-xs text-blue-400 text-center m-1">Upcoming</div>) : null}
                </div>
                <div>
                    <table>
                        <tbody>
                            <tr>
                                <td className="text-right w-1/2 pr-4">Flight#:</td>
                                <td className="text-left w-1/2 pr-4 overflow-hidden">{ launch.flight_number }</td>
                            </tr>
                            <tr>
                                <td className="text-right w-1/2 pr-4">Launch:</td>
                                <td className="text-left w-1/2 pr-4 overflow-hidden">{ launch.date_unix }</td>
                            </tr>
                            <tr>
                                <td className="text-right w-1/2 pr-4">Rocket:</td>
                                <td className="text-left w-1/2 pr-4 overflow-hidden">{ launch.rocket ? (<Link to={`/rockets/${launch.rocket}`}>{launch.rocket}</Link>) : "No rockets used"}</td>
                            </tr>
                            <tr>
                                <td className="text-right w-1/2 pr-4">Capsules:</td>
                                <td className="text-left w-1/2 pr-4 overflow-hidden">{ launch.capsules.length > 0 ? (launch.capsules.map(capsule=><Link to={`/capsules/${capsule}`}>{capsule}</Link>)) : "No capsules" }</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="w-100 my-4">
                    {launch.details ? launch.details.substring(0, details_word_limit) : "No public details available"}
                    { launch.details && launch.details.length > details_word_limit ? "..." : "" }
                </div>
                <Link to={`/launches/${launch.id}`} className="border border-pink-500 text-pink-500 text-xs rounded-full py-1 px-3 mt-5">Read More</Link>
            </div>
            ): "Loading..."}
        </div>
    )
}

export default LaunchCard
