import React from 'react'
import './App.css';
// import products from './products.svg'
import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">

      <Header />
      <Main />
      <Footer />
      {/* <p>lol</p> */}
    </div>
  );
}

export default App;
