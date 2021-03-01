import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LandingPage from "./components/LandingPage/LandingPage";
<<<<<<< HEAD
import RocketsPage from "./components/RocketsPage/RocketsPage";
import LaunchesPage from './components/LaunchesPage/LaunchesPage';
import Rocket from './components/Rocket/Rocket';
=======
>>>>>>> 83932be966ffbf8c37f6a575d6b9f34f91d62c4a
import Button from './components/Button/Button'

function App() {
  return (
    <div className="">
      <Router>
      <div className=" absolute z-10">
        <ul className="flex flex-row mt-8">
          <li className="ml-2"><Button title="Home" link="/" /></li>
          <li className="ml-2"><Button title="Rockets" link="/rockets"/></li>
          <li className="ml-2"><Button title="SpaceX" link="/timeline"/></li>
          <li className="ml-2"><Button title="Launches" link="/launches"/></li>
          <li className="ml-2"><Button title="Capsules" link="/capsules"/></li>
        </ul>
      </div>
        <Switch>
            <Route exact path="/"><LandingPage /></Route>
<<<<<<< HEAD
            <Route exact path="/rockets"><RocketsPage /></Route>
            <Route exact path="/rockets/:rocketid"><Rocket /></Route>
            <Route exact path="/launches" component={LaunchesPage} />
=======
>>>>>>> 83932be966ffbf8c37f6a575d6b9f34f91d62c4a
        </Switch>
      </Router>
    </div>
  );
}

export default App;
