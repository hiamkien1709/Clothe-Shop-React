import axios from 'axios'
import  { useEffect, useState } from 'react'
import { toast } from "react-toastify";

const useQuery = (url) => {
  const [data, setData] = useState()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState()

  useEffect(() => {
    let here  = false
    setLoading(true)
    axios.get(url)
    .then(res => {
      if(here) return
      setData(res.data)
      setLoading(false)
    })
    .catch(err => {
      if(here) return
      setError(err.response.data.msg)
      toast.error(err.response.data.msg)
    })
    .finally(() =>{
      if(!here) return
      setLoading(false)
    })


    return () => {
      here = true //unmount
    }
  }, [url])

  return {data, loading, error}
}

export default useQuery