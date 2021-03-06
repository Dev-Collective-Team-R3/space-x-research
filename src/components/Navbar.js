import React from 'react'
import Button from '../components/Button/Button'
import { useLocation } from 'react-router-dom'

const Navbar = () => {
    
    const location = useLocation();
    
    return (
        <div>
            <ul className="z-10 fixed flex flex-row top-6 left-3">
            <li className="ml-2"><Button title="Home" link="/" active={ location.pathname == "/" } /></li>
            <li className="ml-2"><Button title="Rockets" link="/rockets" active={ location.pathname.includes("/rockets") }/></li>
            <li className="ml-2"><Button title="SpaceX" link="/timeline" active={ location.pathname.includes("/timeline") }/></li>
            <li className="ml-2"><Button title="Launches" link="/launches" active={ location.pathname.includes("/launches") }/></li>
            <li className="ml-2"><Button title="Capsules" link="/capsules" active={ location.pathname.includes("/capsules") }/></li>
            </ul>
        </div>
    )
}

export default Navbar
