import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import BotScreen from "./screens/botScreen"
import BotEditScreen from "./screens/botEditScreen"
import BotEditCreateScreen from "./screens/botCreateScreen"
function App() {
  return <Router>
    <div>
      <Switch>
        <Route path="/bots">
          <BotScreen />
        </Route>
        <Route path="/edit" exact>
          <BotEditScreen />
        </Route>
        <Route path="/edit/create">
          <BotEditCreateScreen />
        </Route>

      </Switch>
    </div >
  </Router >
}

export default App;
