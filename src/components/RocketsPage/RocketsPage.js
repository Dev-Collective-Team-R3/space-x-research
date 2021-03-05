import React, { useState, useEffect, useMemo } from 'react'

import { fetchMultipleSchema } from '../../services/loadData'
import RocketsTable from '../RocketsTable'
import Loading from '../Loading'

const RocketsPage = () => {

    // State to hold all the rocket data
    const [ rockets, setRockets ] = useState([])

    //state to hold only rocket names and ids
    const [ rocketSmall, setRocketSmall ] = useState([])
    
    useEffect(async () => {
        const data = await fetchMultipleSchema('rockets')
        setRockets(data)
        const newdata = data.map(rocket=>({id: rocket.id, name: rocket.name}))
        setRocketSmall(newdata)
    }, [])

    const tableColumns = useMemo(
        ()=>{
            const headers = [].push({HEADER: '', accessor: ''})
            rockets.map(rocket=>({HEADER: rocket.name, accessor: ""}))
        },[]
    )

    return (
        <div className="">
            {
                rockets.length > 0 ? (<RocketsTable rockets={rockets} />):(<Loading />)
            }
        </div>
    )
}

export default RocketsPage
