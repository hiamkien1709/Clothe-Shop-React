import React from 'react'
import ProductsCard from '../products/ProductsCard'

const Products = React.memo(({ products }) => {
  return (
    <div className='products'>
      {
        products.map(product => (
          <ProductsCard key={product._id} product={product} />
        ))
      }
    </div>
  )
})

export default Products