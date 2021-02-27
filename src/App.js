import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LandingPage from "./components/LandingPage/LandingPage";
import RocketsPage from "./components/RocketsPage/RocketsPage";
import Rocket from './components/Rocket/Rocket';
import Button from './components/Button/Button'

function App() {
  return (
    <div className="">
      <Router>
      <div className="absolute z-10 mt-8 ">
        <ul className="flex flex-row">
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
        </Switch>
      </Router>
    </div>
  );
}

export default App;
