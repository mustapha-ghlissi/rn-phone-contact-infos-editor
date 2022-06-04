import { View, Text } from 'react-native'
import React from 'react'
import { styles } from '../assets/styles'

const Placeholder = ({contactName}) => {
  return (
    <View style={[styles.contactAvatar, styles.contactAvatarPlaceholder]}>
      <Text style={styles.contactAvatarPlaceholderText}>
        {contactName}
      </Text>
    </View>
  )
}

export default Placeholder