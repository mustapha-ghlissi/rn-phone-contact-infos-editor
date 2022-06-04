import { View, ActivityIndicator } from 'react-native'
import React from 'react'
import { styles } from '../assets/styles'
import { Colors } from 'react-native/Libraries/NewAppScreen'

const Loader = () => (
  <View style={[styles.content, styles.centered]}>
    <ActivityIndicator color={Colors.blue} size="large" />
  </View>
);

export default Loader;
