import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import Accueil from './Accueil';
import Dofus from './Dofus';
import Wakfu from './Wakfu';
import Jeux_de_société from './Jeux_de_société';
import Livres from './Livres';
import Produits_dérivés from './Produits_dérivés';
import Autres_Univers from './Autres_Univers';
import Panier from './Panier';
import 'bootstrap/dist/css/bootstrap.min.css';
import React,{ Component } from 'react';


class App extends Component {
  render() {
    return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Accueil />} />
        <Route exact path='/dofus' element={<Dofus />} />
        <Route exact path='/wakfu' element={<Wakfu />} />
        <Route exact path='/jeux-de-société' element={<Jeux_de_société />} />
        <Route exact path='/livres' element={<Livres />} />
        <Route exact path='/produits-dérivés' element={<Produits_dérivés />} />
        <Route exact path='/autres-univers' element={<Autres_Univers />} />
        <Route exact path='/panier' element={<Panier />} />
      </Routes>
    </Router>
    )
  }
}

export default App;