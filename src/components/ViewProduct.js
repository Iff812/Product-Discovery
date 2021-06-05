import React from 'react'
import { Text, StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native'
import { SliderBox } from "react-native-image-slider-box"

const ViewProduct = ({ navigation }) => {
  const data = navigation.getParam('data')
  const images = data.images.map(a => a.src)
  const size = data.sizes.split(',')

  console.log(images)

  return (
    <ScrollView style={{ top: 25, flex: 1, marginBottom: 30 }}>
      <SliderBox images={images} sliderBoxHeight={450} dotColor='#303030' />
      <View style={styles.detailsContainer}>
        <Text style={styles.productName}>{data.productName} </Text>

        <View style={styles.priceTag}>
          <Text style={styles.rupee}> {'\u20B9'}{data.price}</Text>
          <Text style={styles.priceStyle}> {'\u20B9'}{data.mrp} </Text>
          <Text style={styles.discount}> {data.discountDisplayLabel} </Text>
        </View>

        <Text style={styles.tax}> inclusive of all taxes </Text>
      </View>

      <View style={styles.sizeContainer}>
        <Text style={styles.sizeText}> Available Size </Text>
        <View style={{ flexDirection: 'row' }}>
          {size.map((item, key) => (
            <TouchableOpacity>
              <Text key={key} style={styles.sizes}> {item} </Text>
            </TouchableOpacity>
          )
          )}
        </View>

      </View>
    </ScrollView>
  )
}

ViewProduct.navigationOptions = () => {
  return {
    headerShown: false
  }
}

const styles = StyleSheet.create({
  productName: {
    fontSize: 15,
    color: 'black',
  },
  detailsContainer: {
    paddingLeft: 10,
    paddingTop: 10,
    backgroundColor: '#ffffff'
  },
  priceTag: {
    marginTop: 5,
    flexDirection: 'row',
  },
  rupee: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    color: '#484848'
  },
  priceStyle: {
    marginLeft: 3,
    marginRight: 3,
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
    fontSize: 14,
    color: '#808080',
  },
  discount: {
    fontSize: 14,
    color: '#ff905a'
  },
  tax: {
    color: '#00CC66',
    fontSize: 12,
    fontWeight: 'bold',
    paddingBottom: 10
  },
  sizeContainer: {
    marginTop: 10,
    paddingTop: 10,
    paddingLeft: 10,
    backgroundColor: '#ffffff',
    paddingBottom: 30
  },
  sizeText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#202020',
    paddingBottom: 20
  },
  sizes: {
    borderWidth: 2,
    borderColor: 'black',
    marginRight: 10,
    fontWeight: 'bold',
    borderRadius: 25,
    padding: 10,
    textAlign: 'center',
  }
})

export default ViewProduct