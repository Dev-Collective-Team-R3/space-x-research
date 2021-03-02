import { useEffect } from 'react'
import { useState } from 'react'
import { fetchMultipleSchema } from '../../services/loadData'
import { Link, Switch, Route, useRouteMatch, useParams } from 'react-router-dom'
//import LaunchCard from '../LaunchCard/LaunchCard'
import _ from 'lodash'

const LaunchesPage = () => {
    const [ launches, setLaunches ] = useState([])

    const [ focusLaunch, setFocusLaunch ] = useState(null)

    useEffect(async ()=>{
        const data = await fetchMultipleSchema('launches')
        setLaunches(data)
    },[fetchMultipleSchema])
    
    const handleClick = (e) =>{
        const focusId = e.target.id
        const focus = launches.filter(launch => launch.id == focusId)[0]
        setFocusLaunch(focus)
    }
    return (
        <div className="mt-40 ml-40 flex">
            <ul className="w-1/4 border h-screen overflow-scroll overflow-x-hidden">
                {
                    launches.length > 0 ?
                    (_.sortBy(launches, (launch)=> launch.name ).map(launch => (
                        <li key={launch.id} className={`p-3 cursor-pointer hover:bg-pink-500 ${ (focusLaunch != null && focusLaunch.id == launch.id) ? 'bg-pink-500' : "" }`} onClick={handleClick} id={launch.id}>{launch.name}</li>
                    ))): "Loading..."
                }
            </ul>
            <div className="w-3/4 flex flex-col">
                {
                    focusLaunch != null ? (<>
                    <div className="mb-5">
                        <img src={focusLaunch.links.flickr.original} alt="spacex launch" className="object-cover h-screen-3/4 w-2/3 ml-auto mr-auto" />
                        <div className="absolute left-1/2 bottom-5 w-100 flex">
                            <span className="border rounded-full px-3 py-2 bg-pink-500 border-pink-500 ml-2 text-white">{focusLaunch.upcoming ? "future" : "launched"}</span>
                            { focusLaunch.links.webcast ? (<a href={focusLaunch.links.webcast} target="_blank" className="border rounded-full p-2 text-white bg-pink-500 border-pink-500 px-3 py-2 ml-2">Webcast</a>) : null}
                            { focusLaunch.links.presskit ? (<a href={focusLaunch.links.presskit} download className="border rounded-full p-2 text-white bg-pink-500 border-pink-500 ml-2">Press</a>) : null}
                            { focusLaunch.links.article ? (<a href={focusLaunch.links.article} className="border rounded-full p-2 bg-pink-500 text-white border-pink-500 ml-2">News</a>) : null}
                            { focusLaunch.links.wikipedia ? (<a href={focusLaunch.links.wikipedia} className="border rounded-full p-2 bg-pink-500 text-white border-pink-500 ml-2">Wikipedia</a>) : null}
                        </div>
                    </div>
                    <div className="ml-4 mr-4">
                        <p>{focusLaunch.details}</p>
                    </div>
                    </>) : "Select a launch to get details"
                }
            </div>
        </div>
    )
}

export default LaunchesPage

