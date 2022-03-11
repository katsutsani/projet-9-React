import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import Accueil from './Accueil';
import AllArticles from './AllArticles';
import Panier from './Panier';
import Article from './Article';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import NavSite from './Navbar';
import { BsTelephoneInbound } from 'react-icons/bs';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      articles: [],
      panier: [],
      categories: [],
      sub_categories: [],
      article: [],
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
    localStorage.getItem('panier') && this.setState({ panier: [...JSON.parse(localStorage.getItem('panier'))] })
  }

  Commande = async () => {
    const panier = JSON.stringify(this.state.panier)
    await fetch('http://localhost:1337/api/orders?populate=*', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'charset=UTF-8'
      },
      body: JSON.stringify({
        data: {
          name: "commande",
          articles: panier
        }
      })
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .then(localStorage.clear());
  }

  addToCart = (article) => {
    this.setState({
      panier: [...this.state.panier, article
      ]
    }, () => localStorage.setItem('panier', JSON.stringify(this.state.panier)))
  }

  render() {
    return (
      <>
        <Router>
          <Routes>
            <Route exact path='/' element={<Accueil
              articles={this.state.articles}
              categories={this.state.categories}
              sub_categories={this.state.sub_categories}
              Universs={this.state.Univers}
              panier={this.state.panier}
              addToCart={this.addToCart} />} />
            <Route exact path='/dofus' element={<AllArticles
              articles={this.state.articles}
              categories={this.state.categories}
              sub_categories={this.state.sub_categories}
              Universs={this.state.Univers}
              panier={this.state.panier}
              addToCart={this.addToCart} />} />
            <Route exact path='/wakfu' element={<AllArticles
              articles={this.state.articles}
              categories={this.state.categories}
              sub_categories={this.state.sub_categories}
              Universs={this.state.Univers}
              panier={this.state.panier}
              addToCart={this.addToCart} />} />
            <Route exact path='/jeux-de-societe' element={<AllArticles
              articles={this.state.articles}
              categories={this.state.categories}
              sub_categories={this.state.sub_categories}
              Universs={this.state.Univers}
              panier={this.state.panier}
              addToCart={this.addToCart} />} />
            <Route exact path='/livres' element={<AllArticles
              articles={this.state.articles}
              categories={this.state.categories}
              sub_categories={this.state.sub_categories}
              Universs={this.state.Univers}
              panier={this.state.panier}
              addToCart={this.addToCart} />} />
            <Route exact path='/produits-derives' element={<AllArticles
              articles={this.state.articles}
              categories={this.state.categories}
              sub_categories={this.state.sub_categories}
              Universs={this.state.Universs}
              panier={this.state.panier}
              addToCart={this.addToCart} />} />
            <Route exact path='/autres-univers' element={<AllArticles
              articles={this.state.articles}
              categories={this.state.categories}
              sub_categories={this.state.sub_categories}
              Universs={this.state.Univers}
              panier={this.state.panier}
              addToCart={this.addToCart} />} />
            <Route exact path='/panier' element={<Panier
              articles={this.state.articles}
              categories={this.state.categories}
              sub_categories={this.state.sub_categories}
              Universs={this.state.Univers}
              panier={this.state.panier}
              addToCart={this.addToCart}
              commande={this.Commande} />} />
            <Route exact path='/article/:id' element={<Article
              articles={this.state.articles}
              categories={this.state.categories}
              sub_categories={this.state.sub_categories}
              Universs={this.state.Univers}
              panier={this.state.panier}
              addToCart={this.addToCart} />} />
          </Routes>
        </Router>
      </>
    )
  }
}

export default App;