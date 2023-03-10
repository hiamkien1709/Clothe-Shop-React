import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useQuery from "../hooks/useQuery";
import Products from "../components/products/Products";

const Search = () => {
  const { value } = useParams();
  const [products, setProducts] = useState([]);

  const { data, loading, error } = useQuery(`/products?search=${value}`);

  useEffect(() => {
    if (data?.products) setProducts(data.products);
  }, [data?.products]);

  return (
    <>
      <Products products={products} />
      {loading && <h2>Loading...</h2>}
      {error && <h2>{error}</h2>}
    </>
  );
};

export default Search;
