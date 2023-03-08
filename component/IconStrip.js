import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';


export default function IconStrip() {
  return (
    <View style={styles.stripContainer}>
      <Ionicons name="md-chatbubbles-outline" size={24} color='grey' />
      <AntDesign name="retweet" size={24} color='grey' />
      <AntDesign name='hearto' size={24} color='grey' />
      <Ionicons name="ios-heart-dislike-outline" size={24} color='grey' />
      <Ionicons name='stats-chart' size={24} color='grey' />
      <Entypo name="share" size={24} color='grey' />

    </View>
  )
}

const styles = StyleSheet.create({
  stripContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingEnd: 12
  }
})