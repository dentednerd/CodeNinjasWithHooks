import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import globalStyles from './globalStyles';

import Nav from './organisms/Nav';
import Home from './pages/Home';

function App() {
  globalStyles();

  return (
    <Router>
      <Nav />
      <main>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/levels/:level">
            <p>Level</p>
          </Route>
          <Route path="/credits">
            <p>Credits</p>
          </Route>
          <Route path="/404">
            <p>not found</p>
          </Route>
          <Redirect to="/404" />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
