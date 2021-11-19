import { MemoryRouter as Router, Switch, Route } from 'react-router-dom';
import CreateWallet from './CreateWallet';
import ImportWallet from './ImportWallet';
import Login from './Login';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/import-wallet" component={ImportWallet} />
        <Route path="/create-wallet" component={CreateWallet} />
      </Switch>
    </Router>
  );
}
