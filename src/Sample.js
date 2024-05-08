import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'



const Sample = () => {
  return (
    <View>
      <Image
        style={styles.image}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
    </View>
  )
}

export default Sample

const styles = StyleSheet.create({
    image:{height:50,width:50}
})