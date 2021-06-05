import createDataContext from './createDataContext'
import api from '../api/api'
import { navigate } from '../navigationRef'

const dataReducer = (state, action) => {
  switch (action.type) {
    case 'get_data':
      return { ...state, productData: action.payload }
    case 'men_data':
      return { ...state, menProducts: action.payload }
    case 'women_data':
      return { ...state, womenProducts: action.payload }
  }
}

const fetchProducts = (dispatch) => {
  return async () => {
    try {
      const data = await api.get()
      dispatch({ type: 'get_data', payload: data.data.products })

      const menProducts = data.data.products.filter(function (item) {
        return item.gender == 'Men'
      })
      dispatch({ type: 'men_data', payload: menProducts })

      const womenProducts = data.data.products.filter(function (item) {
        return item.gender == 'Women'
      })
      dispatch({ type: 'women_data', payload: womenProducts })
    }
    catch (err) {
      console.log(err)
    }
  }
}

export const { Provider, Context } = createDataContext(
  dataReducer,
  { fetchProducts },
  { productData: {}, menProducts: {}, womenProducts: {} }
)