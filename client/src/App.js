import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductsDetail from "./pages/ProductsDetail";
import Filter from "./pages/Filter";
import Header from "./components/Header";
import Search from "./pages/Search";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Home />} />
        <Route path="/products/:id" element={<ProductsDetail />} />
        <Route path="/search/:value" element={<Search />} />
        <Route path="/filter/:option/:value" element={<Filter />} />
      </Routes>
    </>
  );
};

export default App;
