import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LandingPage from "./components/LandingPage/LandingPage";
import RocketsPage from "./components/RocketsPage/RocketsPage";
import LaunchesPage from './components/LaunchesPage/LaunchesPage';
import Launch from './components/Launch/Launch';
import Rocket from './components/Rocket/Rocket';
import Timeline from './components/timeline';
import Capsules from './components/CapsulesPage';
import Capsule from './components/Capsule';

import Button from './components/Button/Button'
import LaunchCard from "./components/Launch/Launch";
import Navbar from './components/Navbar'

function App() {
  return (
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
  );
}

export default App;
