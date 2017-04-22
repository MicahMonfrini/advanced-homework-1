import React from "react";
import "./App.css";
import Header from "./Header";
import CategoryList from "./CategoryList";
import Carousel from "./Carousel";
import ProductDetail from "./ProductDetail";
import TemplateTutorial from "./TemplateTutorial";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">

        <div className="row">
          <CategoryList />
        </div>

        <div className="row">
          <Carousel />
        </div>

        <div className="row">
          <ProductDetail />
          <ProductDetail />
          <ProductDetail />
          <ProductDetail />
          <ProductDetail />
          <TemplateTutorial />
        </div>

      </div>

      <div className="container">
        <hr />
        <footer>
          <div className="row">
            <div className="col-lg-12">
              <p>Copyright &copy; Your Website 2014</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;