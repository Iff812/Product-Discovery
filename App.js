import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import Home from './src/screens/Home'
import Men from './src/screens/Men'
import Women from './src/screens/Women'
import FetchData from './src/screens/FetchData'
import ViewProduct from './src/components/ViewProduct'
import SplashScreen from './src/screens/SplashScreen'
import ApplyFilter from './src/components/ApplyFilter'
import { setNavigator } from './src/navigationRef'
import { Provider as FetchProvider } from './src/context/dataContext'

const navigator = createStackNavigator({
  Home: Home,
  Men: Men,
  Women: Women,
  Data: FetchData,
  Details: ViewProduct,
  Splash: SplashScreen,
  Filter: ApplyFilter
},
  {
    initialRouteName: 'Splash',
  }
)

const App = createAppContainer(navigator)

export default () => {
  return (
    <FetchProvider>
      <App ref={(navigator) => { setNavigator(navigator) }} />
    </FetchProvider>
  )
}