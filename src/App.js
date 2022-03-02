import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import Accueil from './Accueil';
import Page2 from './Page2';

function App() {
  return (
      <Router>
        <Routes>
          <Route exact path='/' element={<Accueil/>} />
          <Route exact path='/page2' element={<Page2/>} />
        </Routes>
      </Router>
  );
}

export default App;
