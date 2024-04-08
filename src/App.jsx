import {Routes,Route} from 'react-router-dom'
import './App.css';
import Login from './Com/Login/Login';
import Regis from './Com/Login/Regis';
import Home from './Com/Home/Home';

function App() {

  return (
  <>
    <div className="container">
      <Routes >
        <Route path='/login' Component={Login} />
        <Route path='/regis' Component={Regis} />
        <Route path='/' Component={Home}/>
      </Routes>
    </div>
  </>
  );
}

export default App;
