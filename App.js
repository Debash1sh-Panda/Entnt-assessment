import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Products from './components/Products';
import Orders from './components/Orders';
import Calendar from './components/Calendar'; // Optional

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Dashboard</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/orders">Orders</Link>
            </li>
            {/* Optional */}
            <li>
              <Link to="/calendar">Calendar</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/orders">
            <Orders />
          </Route>
          {/* Optional */}
          <Route path="/calendar">
            <Calendar />
          </Route>
          <Route path="/">
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
