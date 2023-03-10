import React from 'react'
import { useParams } from 'react-router-dom'
import ProductInfo from '../components/products/ProductInfo'
import useQuery from '../hooks/useQuery'

const ProductsDetail = () => {
  const {id} = useParams()
  const {data: product, loading, error} = useQuery(`products/${id}`)


  return (
    <div>
     {product && <ProductInfo product={product}/>}
     {loading && <h2>Loading...</h2>}
     {error && <h2>{error}</h2>}
    </div>
  )
}

export default ProductsDetail