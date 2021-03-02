import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LandingPage from "./components/LandingPage/LandingPage";
import RocketsPage from "./components/RocketsPage/RocketsPage";
import LaunchesPage from './components/LaunchesPage/LaunchesPage';
import Rocket from './components/Rocket/Rocket';
import Timeline from './components/timeline';
import Capsules from './components/CapsulesPage'

import Button from './components/Button/Button'

function App() {
  return (
    <div className="">
      <Router>
      <div className="z-0">
        <ul className="z-10 flex flex-row absolute top-6">
          <li className="ml-2"><Button title="Home" link="/" /></li>
          <li className="ml-2"><Button title="Rockets" link="/rockets"/></li>
          <li className="ml-2"><Button title="SpaceX" link="/timeline"/></li>
          <li className="ml-2"><Button title="Launches" link="/launches"/></li>
          <li className="ml-2"><Button title="Capsules" link="/capsules"/></li>
        </ul>
      </div>
        <Switch>
            <Route exact path="/"><LandingPage /></Route>
            <Route exact path="/rockets"><RocketsPage /></Route>
            <Route exact path="/rockets/:rocketid"><Rocket /></Route>
            <Route exact path="/launches" component={LaunchesPage} />
            <Route exact path="/timeline" component={Timeline} />
            <Route exact path="/capsules" component={Capsules} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
