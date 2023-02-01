import React, { useEffect, useMemo, useState } from 'react'
import Products from '../components/products/Products';
import useQuery from '../hooks/useQuery'
import Pagination from '../components/Pagination';
import Sorting from '../components/Sorting';
import { Store, useMyContext } from '../context/store';


const Home = () => {
  const [products, setProducts] = useState([])
  const [limit, setLimit] = useState(5)

  const {page, sort} = useMyContext(Store)

  const {data, loading, error} = useQuery(
    `/products?limit=${limit}&page=${page}&sort=${sort}`
  )


  useEffect(() => {
    if(data?.products) setProducts(data.products)
  }, [data?.products])

  const totalPages = useMemo(() => {
    if(!data?.count) return 0
    return  Math.ceil(data.count / limit)
  }, [data?.count, limit])


  return (
    <div>
      <Sorting />
      <Products products={products}/>
      {loading && <h2>Loading...</h2>}
      {error && <h2>{error}</h2>}
      <Pagination totalPages={totalPages}/>
    </div>
  )
}

export default Home