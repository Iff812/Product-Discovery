import React from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import { Avatar } from 'react-native-elements'
import { withNavigation } from 'react-navigation'

const Home = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => { navigation.navigate('Men') }}>
        <Avatar
          rounded
          source={require('../../assets/men.jpg')}
          containerStyle={{ height: 100, width: 100 }}
        />
        <Text style={styles.sections}> Men </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => { navigation.navigate('Women') }}>
        <Avatar
          rounded
          source={require('../../assets/women.jpg')}
          containerStyle={{ height: 100, width: 100, }}
        />
        <Text style={styles.sections}> Women </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    top: '50%'
  },
  sections: {
    textAlign: 'center',
    fontWeight: 'bold'
  }
})

export default withNavigation(Home)