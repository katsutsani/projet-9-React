import logo from './logo.svg';
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
import React, { Component } from 'react';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      articles: [],
      panier: [],
      categories: [],
      sub_categories: [],
    }
  }

  async componentDidMount() {
    const response = await fetch('http://localhost:1337/api/articles?populate=*', { method: 'GET', headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' } })
    const articles = await response.json()
    this.setState({
      articles: articles.data
    })
    const repCat = await fetch('http://localhost:1337/api/categories', { method: 'GET', headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' } })
    const categories = await repCat.json()
    this.setState({
      categories: categories.data
    })
    const repSubCat = await fetch('http://localhost:1337/api/sub-categories', { method: 'GET', headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' } })
    const sub_categories = await repSubCat.json()
    this.setState({
      sub_categories: sub_categories.data
    })
    const repUnivers = await fetch('http://localhost:1337/api/universs', { method: 'GET', headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' } })
    const Univers = await repUnivers.json()
    this.setState({
      Univers: Univers.data
    })
  }
  render() {
    return (
      <Router>
        <Routes>
          <Route exact path='/' element={<Accueil
            articles={this.state.articles}
            categories={this.state.categories}
            sub_categories={this.state.sub_categories}
            Universs={this.state.Univers}
            panier={this.state.panier} />} />
          <Route exact path='/dofus' element={<Dofus
            articles={this.state.articles}
            categories={this.state.categories}
            sub_categories={this.state.sub_categories}
            Universs={this.state.Univers}
            panier={this.state.panier} />} />
          <Route exact path='/wakfu' element={<Wakfu
            articles={this.state.articles}
            categories={this.state.categories}
            sub_categories={this.state.sub_categories}
            Universs={this.state.Univers}
            panier={this.state.panier} />} />
          <Route exact path='/jeux-de-société' element={<Jeux_de_société
            articles={this.state.articles}
            categories={this.state.categories}
            sub_categories={this.state.sub_categories}
            Universs={this.state.Univers}
            panier={this.state.panier} />} />
          <Route exact path='/livres' element={<Livres
            articles={this.state.articles}
            categories={this.state.categories}
            sub_categories={this.state.sub_categories}
            Universs={this.state.Univers}
            panier={this.state.panier} />} />
          <Route exact path='/produits-dérivés' element={<Produits_dérivés
            articles={this.state.articles}
            categories={this.state.categories}
            sub_categories={this.state.sub_categories}
            Universs={this.state.Universs}
            panier={this.state.panier} />} />
          <Route exact path='/autres-universs' element={<Autres_Univers
            articles={this.state.articles}
            categories={this.state.categories}
            sub_categories={this.state.sub_categories}
            Universs={this.state.Univers}
            panier={this.state.panier} />} />
          <Route exact path='/panier' element={<Panier
            articles={this.state.articles}
            categories={this.state.categories}
            sub_categories={this.state.sub_categories}
            Universs={this.state.Univers}
            panier={this.state.panier} />} />
        </Routes>
      </Router>
    )
  }
}

export default App;
