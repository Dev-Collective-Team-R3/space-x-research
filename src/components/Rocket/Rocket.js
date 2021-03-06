import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {fetchSingleItem} from '../../services/loadData'
import ImageSlide from '../ImageSlides'
import GoBack from '../GoBack'

const Rocket = () => {
    const { rocketid } = useParams()

    const [ rocket, setRocket ] = useState("")

    useEffect(async () => {
        const data = await fetchSingleItem('rockets', rocketid)
        setRocket(data)
    }, [])

    const table_left_col = "text-right pr-4 pl-6"
    const table_right_col = "pl-4 pr-6"
    const table_odd_row = "bg-pink-200"
    const table_even_row = "bg-pink-100"

    return (
        <div>
            <GoBack />
            { 
                rocket ?
                (<div className="flex mb-20">
                    <div className="w-screen-1/2 mr-2">
                        <h2 className="text-4xl text-center">{rocket.name}</h2>
                        <div className="flex justify-center items-baseline">
                            <div 
                                className={`border rounded-full p-1 text-xs m-3 ml-0
                                    ${rocket.active ? 'border-green-500 text-green-500' : 'border-red-500 text-red-500'}`}
                            >
                                    {rocket.active ? "Active" : "Not-active"}
                            </div>
                            <a className="border rounded-full p-1 text-xs border-black" href={rocket.wikipedia} target="_blank">Wikipedia</a>
                        </div>
                        <p className="mt-5">{rocket.description}</p>
                        <table className="table-auto mt-5 mx-auto ">
                            <tbody>
                                <tr className={table_odd_row}>
                                    <td className={table_left_col}>Stages:</td>
                                    <td className={table_right_col}>{rocket.stages}</td>
                                </tr>
                                <tr className={table_even_row}>
                                    <td className={table_left_col}>Boosters:</td>
                                    <td className={table_right_col}>{rocket.boosters}</td>
                                </tr>
                                <tr className={table_odd_row}>
                                    <td className={table_left_col}>First Flight:</td>
                                    <td className={table_right_col}>{rocket.first_flight}</td>
                                </tr>
                                <tr className={table_even_row}>
                                    <td className={table_left_col}>Height:</td>
                                    <td className={table_right_col}>{rocket.height.meters} meters</td>
                                </tr>
                                <tr className={table_odd_row}>
                                    <td className={table_left_col}>Diameter:</td>
                                    <td className={table_right_col}>{rocket.diameter.meters} meters</td>
                                </tr>
                                <tr className={table_even_row}>
                                    <td className={table_left_col}>Mass:</td>
                                    <td className={table_right_col}>{rocket.mass.lb} lbs</td>
                                </tr>
                                <tr className={table_odd_row}>
                                    <td className={table_left_col} >Success Rate:</td>
                                    <td className={table_right_col} >{rocket.success_rate_pct}</td>
                                </tr>
                                <tr className={table_even_row}>
                                    <td className={table_left_col} >Cost per launch:</td>
                                    <td className={table_right_col} >{rocket.cost_per_launch/1000000} Million</td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                    <div className="w-screen-1/2">
                        <ImageSlide images={rocket.flickr_images} />
                    </div>
                </div>) : 
                (<div>"Loading..."</div>)
            }
            
        </div>
    )
}

export default Rocket
