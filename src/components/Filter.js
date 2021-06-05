import React, { useState } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, FlatList, CheckBox } from 'react-native'
import Modal from 'react-native-modal'
import { withNavigation } from 'react-navigation'

const Filter = ({ filter, close, prod, navigation }) => {
  const season = [...new Set(prod.map(x => x.season))]
  const discount = [...new Set(prod.map(x => x.discountDisplayLabel))]
  const category = [...new Set(prod.map(x => x.category))]
  const data = season + discount + category
  var res = data.split(",")

  const [products, setProducts] = useState(res)

  const handleChange = (id) => {
    const temp = products.map((product) => {
      if (id === product) {
        return { ...product, isChecked: !product.isChecked }
      }
      return product
    })
    setProducts(temp)
  }

  let selected = products.filter((product) => product.isChecked)

  const renderItem = ({ item }) => {
    return (
      <View style={styles.card}>
        <CheckBox
          value={item.isChecked}
          onChange={() => { handleChange(item) }}
          containerStyle={styles.checkbox}
        />
        <Text>{item}</Text>
      </View>
    )
  }

  return (
    <View>
      <Modal
        isVisible={filter}
        style={styles.modalStyle}
        animationIn='slideInUp'
        animationInTiming={500}
        animationOutTiming={500}
        backdropOpacity={1}
        backdropColor='white'
        swipeDirection={['down', 'up']}
        onBackdropPress={close}
        onBackButtonPress={close}
      >
        <Text style={styles.sizeText}> Category </Text>
        <FlatList
          data={category}
          removeClippedSubviews={true}
          renderItem={renderItem}
          keyExtractor={(key) => key}
        />

        <View style={styles.alignFilter}>
          <Text style={styles.sizeText}> Season </Text>
          <FlatList
            data={season}
            removeClippedSubviews={true}
            renderItem={renderItem}
            keyExtractor={(key) => key}
          />

          <Text style={styles.sizeText}> Discounts </Text>
          <FlatList
            data={discount}
            removeClippedSubviews={true}
            renderItem={renderItem}
            keyExtractor={(key) => key}
          />
        </View>

        <View style={styles.footer}>
          <TouchableOpacity onPress={close}>
            <Text style={styles.footerText}> Close </Text>
          </TouchableOpacity>

          <Text style={styles.footerText}> | </Text>

          <TouchableOpacity onPress={close}>
            <Text style={[styles.footerText, { color: '#ff905a' }]}> Apply </Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  footer: {
    width: '100%',
    height: 50,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  footerText: {
    fontWeight: 'bold',
    fontSize: 16
  },
  checkbox: {
    backgroundColor: '#ffffff',
    borderColor: '#ffffff',
    margin: 0,
    padding: 0
  },
  sizeText: {
    padding: 8,
    fontWeight: 'bold',
    fontSize: 18
  },
  alignFilter: {
    position: 'absolute',
    left: '50%',
    top: 0
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center'
  }
})

export default withNavigation(Filter)