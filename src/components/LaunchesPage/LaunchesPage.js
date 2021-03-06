import { useEffect, useContext, useState } from 'react'
import { fetchSingleSchema } from '../../services/loadData'
import LaunchCard from '../LaunchCard'
import Loading from '../Loading'
import LaunchStat from '../LaunchStat'
import LaunchSearch from '../LaunchSearch'
import { AllDataContext } from '../../services/AllDataContext'
import _ from 'lodash'

const LaunchesPage = () => {
    
    const [ launches, setLaunches ] = useState([])

    const [ allLaunches, setAllLaunches ] = useState([])

    const [ capsules, setCapsules ] = useState([])
    
    const [ rockets, setRockets ] = useState([])

    const value = useContext(AllDataContext)

    useEffect(()=>{
        setLaunches(value.launches)
        setAllLaunches(value.launches)
        setCapsules(value.capsules)
        setRockets(value.rockets)
    },[value])

    const searchFunction = (e) => {
        const searchResult = allLaunches.filter(launch => (
            (launch.name && launch.name.toLowerCase().includes(e.target.value.toLowerCase())) || 
            (launch.details && launch.details.toLowerCase().includes(e.target.value.toLowerCase()))
        ))
        setLaunches(searchResult)
    }
    
    return (
        <div className="mt-40 flex flex-col">
            { launches ? (<LaunchSearch searchFunction={searchFunction} />) : null }
            { launches ? (<LaunchStat launches={launches} />) : null }
            <ul className="w-screen-9/10 flex flex-wrap justify-around mx-auto">
                {
                    ( launches && launches.length > 0) ?
                    (_.sortBy(launches, (launch)=> launch.name ).map((launch, index) => (
                        <li key={index} className="w-screen-40 p-5 border mb-5 shadow-md rounded-lg">
                            <LaunchCard launch={launch} rockets={rockets} capsules={capsules} className=""/>
                        </li>
                    ))) : (<Loading />)
                }
            </ul>
        </div>
    )
}

export default LaunchesPage

