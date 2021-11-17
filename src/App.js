import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./Components/Header";
import JobList from "./Components/JobList";
import Jobs from "./Components/Jobs";
import data from "./data.json";

import "./App.css";

function App() {
  return (
    <main className="bg-light-mode dark:bg-dark-mode min-h-screen">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <JobList data={data} />
          </Route>
          <Route path="/job/:id">
            <Jobs data={data} />
          </Route>
        </Switch>
      </Router>
    </main>
  );
}

export default App;
