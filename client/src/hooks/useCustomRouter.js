import { useNavigate, useLocation } from 'react-router-dom'


const useCustomRouter = () => {
  const navigate = useNavigate()

  const {pathname} = useLocation()

  const pushQuery = (query) => {
    const newQuery = new URLSearchParams(query).toString()
    console.log(newQuery)
    navigate(`${pathname}?${newQuery}`)
  }

  return {pushQuery}
}

export default useCustomRouter