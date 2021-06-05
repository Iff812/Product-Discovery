import React, { useContext, useState } from 'react'
import { Text, View, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { withNavigation } from 'react-navigation'
import { AntDesign } from '@expo/vector-icons'

import { Context as MenContext } from '../context/dataContext'
import ProductDescription from '../components/ProductDescription'
import Filter from '../components/Filter'

const Men = ({ navigation }) => {
  const { state } = useContext(MenContext)
  const [filter, setFilter] = useState(false)

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => { navigation.navigate('Details', { data: item }) }}>
        <ProductDescription item={item} />
      </TouchableOpacity>
    )
  }

  const filt = (filter) => setFilter(!filter)

  return (
    <View>
      <FlatList
        data={state.menProducts}
        removeClippedSubviews={true}
        initialNumToRender={10}
        renderItem={renderItem}
        numColumns={2}
        keyExtractor={(result) => result.productId.toString()}
      />
      <View style={styles.footer}>
        <Text style={styles.footerText}> Men </Text>
        <Text style={styles.footerText}> | </Text>
        <TouchableOpacity onPress={() => setFilter(!filter)}>
          <Text style={styles.footerText}><AntDesign name="filter" size={20} color="black" /> Filter </Text>
        </TouchableOpacity>
      </View>

      {filter ? (
        <Filter filter={filter} close={filt} prod={state.menProducts} />
      ) : null}
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
  }
})

export default withNavigation(Men)