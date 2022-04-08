import './App.css';
import './assets/styles.css';
import './assets/scripts';
import {BrowserRouter as Router, Route ,Switch} from 'react-router-dom';
import Accueil from './pages/internaute/Accueil'
import Login from './pages/internaute/Login'
import DefaultLayer from './layout/admin/DefaultLayer'
import Dashboard from './pages/admin/Dashboard';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' name='Accueil' render={(props)=> <Accueil {...props}/> } />
          <Route path='/admin' name='Admin' render={(props)=> <DefaultLayer {...props} /> } />
          <Route path='/login' name='Login' render={(props)=> <Login {...props} /> } />
          <Route path='/admin/dashboard' name='Dashboard' render={(props)=> <Dashboard {...props} /> } />
        </Switch>
      </Router> 
    </div>
  );
}

export default App;
