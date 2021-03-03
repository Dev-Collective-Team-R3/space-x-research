import { useEffect } from 'react'
import { useState } from 'react'
import { fetchMultipleSchema } from '../../services/loadData'
import { Link, Switch, Route, useRouteMatch, useParams } from 'react-router-dom'
import LaunchCard from '../LaunchCard'
import Loading from '../Loading'
import Stats from '../LaunchStat'
import _ from 'lodash'
import LaunchStat from '../LaunchStat'

const LaunchesPage = () => {
    const [ launches, setLaunches ] = useState([])

    useEffect(async ()=>{
        const data = await fetchMultipleSchema('launches')
        setLaunches(data)
    },[fetchMultipleSchema])
    
    return (
        <div className="mt-40 flex flex-col">
            { launches ? (<LaunchStat launches={launches} />) : null }
            <ul className="w-screen-9/10 flex flex-wrap justify-around mx-auto">
                {
                    (launches.length > 0) ?
                    (_.sortBy(launches, (launch)=> launch.name ).map(launch => (
                        <li key={launch.id} className="w-screen-40 p-5 border mb-5 shadow-md rounded-lg">
                            <LaunchCard launch={launch} className=""/>
                        </li>
                    ))) : (<Loading />)
                }
            </ul>
        </div>
    )
}

export default LaunchesPage

