import Navbar from 'components/Navbar';
import GitSearch from 'pages/GitSearch';
import Home from 'pages/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>

      <Route path="/perfils">
        <GitSearch />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
