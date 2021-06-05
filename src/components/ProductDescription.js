import React from 'react'
import { Text, StyleSheet, View, Dimensions } from 'react-native'
import { Image } from 'react-native-elements'
import { Icon } from 'react-native-elements'

const width = Dimensions.get('screen').width
const height = width * 0.8625

const ProductDescription = ({ item }) => {
  const discount = item.discountDisplayLabel.replace(/[()]/g, '')

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: item.searchImage }}
        style={{ width: width / 2, height: height / 1.4, resizeMode: 'cover' }}
      />

      <View style={styles.padding}>
        <Text style={styles.brandName}> {item.brand} </Text>
        <Text style={styles.productName} numberOfLines={1}> {item.productName} </Text>
        <View style={styles.priceTag}>
          <Text style={styles.rupee}> {'\u20B9'}{item.price}</Text>
          <Text style={styles.priceStyle}> {'\u20B9'}{item.mrp} </Text>
          <Text style={styles.discount}> {discount} </Text>
        </View>
      </View>

      <Text style={styles.rating}> {item.rating == 0 ? item.rating : item.rating.toFixed(1)} <Icon name="star" size={9} color='#145A32' />   |  {item.ratingCount}   </Text>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: height,
    width: width / 2,
    backgroundColor: '#ffffff',
    borderWidth: 0.2,
    borderColor: '#C8C8C8',
  },
  brandName: {
    marginTop: 5,
    fontWeight: 'bold',
    color: '#484848'
  },
  priceTag: {
    marginTop: 5,
    flexDirection: 'row',
  },
  productName: {
    fontSize: 12,
    color: '#808080',
  },
  rupee: {
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  priceStyle: {
    marginLeft: 3,
    marginRight: 3,
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
    fontSize: 12,
    color: '#808080',
  },
  discount: {
    fontSize: 12,
    color: '#ff905a'
  },
  padding: {
    paddingLeft: 5
  },
  rating: {
    backgroundColor: '#ffffff',
    opacity: 0.6,
    color: 'black',
    borderRadius: 10,
    position: 'absolute',
    top: height / 1.57,
    marginLeft: 5,
    alignContent: 'center'
  }
})

export default ProductDescription