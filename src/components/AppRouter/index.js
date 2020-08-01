import React, { useState, useMemo } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Pages from '../pages';
import About from '../pages/about';
import { userContext } from '../../context/userContext';

const AppRouter = () => {
  const [user, setUser] = useState(null);
  const providerValue = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        <userContext.Provider value={providerValue}>
          <Route path="/" exact component={Pages} />
          <Route path="/about" component={About} />
        </userContext.Provider>
      </div>
    </Router>
  );
};

export default AppRouter;
