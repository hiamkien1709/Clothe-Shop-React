import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import useQuery from "../hooks/useQuery";
import Products from '../components/products/Products';

const Search = () => {
  const [products, setProducts] = useState([])

  const {option,value} = useParams()

  const {data, loading, error} = useQuery(`/products?price[${option}]=${value}`)

  useEffect(() => {
    if(data?.products) setProducts(data.products)
  }, [data?.products])

  return (
    <div>
      <Products products={products}/>
      {loading && <h2>Loading...</h2>}
      {error && <h2>{error}</h2>}
    </div>
  )
}

export default Search