import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import NoteDetail from "../components/NoteDetail/NoteDetail";
import Notes from "../components/Notes/Notes";

const AppRouter = () => {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route exact path="/note/:id">
                        <NoteDetail />
                    </Route>
                    <Route exact path="/">
                        <Notes />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default AppRouter