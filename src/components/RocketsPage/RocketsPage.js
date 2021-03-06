import React, { useState, useEffect, useContext } from 'react'

import { fetchSingleSchema } from '../../services/loadData'
import { AllDataContext } from '../../services/AllDataContext'
import RocketsTable from '../RocketsTable'
import Loading from '../Loading'

const RocketsPage = () => {

    // State to hold all the rocket data
    const [ rockets, setRockets ] = useState([])

    //state to hold only rocket names and ids
    const [ rocketSmall, setRocketSmall ] = useState([])

    const value = useContext(AllDataContext)
    
    useEffect(() => {
        (async () => {
        const data = await fetchSingleSchema('rockets')
        setRockets(value.rockets)
        const newdata = value ? value.rockets.map(rocket=>({id: rocket.id, name: rocket.name})) : null
        setRocketSmall(newdata)
    })()}, [value])

    return (
        <div className="">
            {
                rockets && rockets.length > 0 ? (<RocketsTable rockets={rockets} />):(<Loading />)
            }
        </div>
    )
}

export default RocketsPage
