import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Cards from './components/cards';
import Search from './components/search';
import Logo from'./components/logo';
import Footer from './components/footer';
class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Banner />
        <Cards />
        <Search />
        <Logo />
        <Footer />
      </div>
    );
  }
}

export default App;
