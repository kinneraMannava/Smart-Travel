import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './Home/index';
import NavComponent from './Common/NavComponent';

function App() {
  return (
    <Router>
      <div className="App">
        <NavComponent />
        <Home />
      </div>
    </Router>
    
  );
}

export default App;
