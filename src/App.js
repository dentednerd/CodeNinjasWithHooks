import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import globalStyles from './globalStyles';
import UserProvider from './context/user';
import Nav from './organisms/Nav';
import Home from './pages/Home';
import Level from './pages/Level';
import LevelUp from './pages/LevelUp';
import Profile from './pages/Profile';

function App() {
  globalStyles();

  return (
    <UserProvider>
      <Router>
        <Nav />
        <main>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/levels/:level" element={<Level />} />
            <Route exact path="/congrats" element={<LevelUp />} />
            <Route exact path="/profile" element={<Profile />} />
            <Route path="/credits" element={<p>Credits</p>} />
            <Route path="/404" element={<p>not found</p>} />
            <Route render={() => <Navigate to="/404" replace />} />
          </Routes>
        </main>
      </Router>
    </UserProvider>
  );
}

export default App;
