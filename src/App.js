import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { fetchMultipleSchema } from './services/loadData'
import { AllDataContext } from "./services/AllDataContext"
import LandingPage from "./components/LandingPage/LandingPage";
import RocketsPage from "./components/RocketsPage/RocketsPage";
import LaunchesPage from './components/LaunchesPage/LaunchesPage';
import Launch from './components/Launch/Launch';
import Rocket from './components/Rocket/Rocket';
import Timeline from './components/timeline';
import Capsules from './components/CapsulesPage';
import Capsule from './components/Capsule';
import Navbar from './components/Navbar'

function App() {

  // creating allData state
  const [ allData, setAllData ] = useState('')

  //fetching all related data
  useEffect(() => {
    (async () => {
      const data = await fetchMultipleSchema(['rockets', 'launches', 'capsules'])
      setAllData(data)
  })()}, [])

  return (
    <AllDataContext.Provider value={allData}>
      <div className="mt-32 mx-20">
        <Router>
          <Navbar />
          <Switch>
              <Route exact path="/"><LandingPage /></Route>
              <Route exact path="/rockets"><RocketsPage /></Route>
              <Route exact path="/rockets/:rocketid"><Rocket /></Route>
              <Route exact path="/launches" component={LaunchesPage} />
              <Route exact path="/launches/:launchid" component={Launch} />
              <Route exact path="/timeline" component={Timeline} />
              <Route exact path="/capsules" component={Capsules} />
              <Route exact path="/capsules/:capsuleid" component={Capsule}></Route>
          </Switch>
        </Router>
      </div>
    </AllDataContext.Provider>
  );
}

export default App;
