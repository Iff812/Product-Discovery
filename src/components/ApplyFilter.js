import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const ApplyFilter = ({ navigation }) => {
  const filter = navigation.getParam('filters')
  const product = navigation.getParam('products')

  const filteredData = product.filter(function (item) {
    return item == filter
  })

  return (
    <View>
    </View>
  )
}

const styles = StyleSheet.create({})

export default ApplyFilter