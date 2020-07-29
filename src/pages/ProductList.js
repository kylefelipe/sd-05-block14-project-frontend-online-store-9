import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Search from '../components/Search';
import ProductCard from '../components/ProductCard';
import Categories from '../components/Categories';

import cartImg from '../images/cart.png';
import logoImg from '../images/logo.png';
import './ProductList.css';

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: undefined,
      searchText: undefined,
      category: undefined,
    };
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(event) {
    const text = event.target.value;
    this.setState({ searchText: text });
  }

  render() {
    return (
      <div className="productlist-cover container">
        <header className="main container">
          <img className="logoImg" src={logoImg} alt="Logo" />
          <div className="search container">
            <Search onClick={this.handleSearch} />
          </div>
          <Link to="/cart" className="shopping-cart-button">
            <img
              className="cartImg"
              data-testid="shopping-cart-button"
              alt="imagem do Carrinho"
              src={cartImg}
            />
          </Link>
        </header>
        <div>
          Nenhum produto foi encontrado
        </div>
      </div>
    );
  }
}

export default MovieList;
