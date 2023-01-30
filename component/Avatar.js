import React from 'react';
import { Image, View, StyleSheet } from 'react-native';

import bighead from '../assets/bighead.jpg';

export default function Avatar() {
  return (
    <View>
        <Image source={bighead} style={styles.avatarImage} />
    </View>
  )
}


const styles = StyleSheet.create({
    avatarImage: {
        width: 60,
        height: undefined,
        resizeMode: 'contain',
        aspectRatio: 1,
        borderRadius: 30

    }
})