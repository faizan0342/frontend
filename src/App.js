import logo from './logo.svg';
import './App.css';
import product from "./data"

import Product from "./component/Product"
import HomeScreen from './screen/HomeScreen';
import {Route } from "react-router-dom"
import ProductScreen from "./screen/ProductScreen"
 
function App() {
  return (
    <div className="App">
          <div className="grid-container">
    <header className="row">
        <div className="cart.html">
            <a href="/">Webside</a>
        </div>
        <div className="signin.html">
            <a href="/">Sign In</a>
            <a href="/">Cart</a>
        </div>
    </header>
    
    <main>
    <Route path="/product/:id" component = {ProductScreen}></Route>
    <Route path="/" exact component = {HomeScreen}></Route>
    
    </main>
    <footer>
        all rigth reverved 
    </footer>
 </div>
    </div>
  );
}

export default App;
