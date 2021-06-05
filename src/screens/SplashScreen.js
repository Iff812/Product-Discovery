import React, { useEffect, useContext } from 'react'
import { View, Image, StyleSheet, Dimensions } from 'react-native'
import { withNavigation } from 'react-navigation'

import { Context as FetchCOntext } from '../context/dataContext'

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

const SplashScreen = ({ navigation }) => {
  let logo = require('../../assets/Logo.png')
  const { fetchProducts, state } = useContext(FetchCOntext)

  setTimeout(() => {
    navigation.navigate('Home')
  }, 3000)

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#ffffff' }}>
      <Image source={logo} style={{ height: height, width: width, resizeMode: "contain" }} />
    </View>
  )
}

SplashScreen.navigationOptions = () => {
  return {
    headerShown: false
  }
}

const styles = StyleSheet.create({})

export default withNavigation(SplashScreen)