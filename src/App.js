import {} from "./App.css";
import Notes from "./components/Notes/Notes";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NoteDetail from "./components/NoteDetail/NoteDetail";

const App = () => {
  return (
    <Router>
      <div className="App">
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav> */}

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/note/:id">
            <NoteDetail />
          </Route>
          <Route exact path="/">
            <Notes />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
