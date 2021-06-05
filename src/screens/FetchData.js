import { useEffect, useContext } from 'react'

import { Context as FetchCOntext } from '../context/dataContext'

const FetchData = () => {
  const { fetchProducts, state } = useContext(FetchCOntext)

  useEffect(() => {
    fetchProducts()
  }, [])

  return null
}

export default FetchData