import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const MapCard = () => {
  return (
    <View style={styles.card}>
      <Text>MapCard</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    card: {
        position: "absolute",
        bottom: 0,
        width:"100%",
        height:"20%",
        backgroundColor:"#000",
        borderTopLeftRadius:20,
        borderTopRightRadius: 20,
    }
});

export default MapCard