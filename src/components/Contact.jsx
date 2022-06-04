import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Alert, Text, Image, TouchableOpacity } from 'react-native';
import Contacts from 'react-native-contacts';
import { styles } from '../assets/styles';
import Placeholder from './Placeholder';

export default Contact = ({contact, handleLoading}) => {
  const {
    displayName,
    givenName,
    thumbnailPath,
    hasThumbnail,
    phoneNumbers,
  } = contact;
  const navigation = useNavigation();

  const getAbreviation = () => {
    let abbr = '';

    if (givenName !== undefined && givenName?.length > 1) {
      abbr = givenName?.substr(0, 1);
    }

    return abbr;
  }

  return (
    <TouchableOpacity
      style={styles.contact}
      onPress={() => {
        // navigation.navigate('Edit', {contact})
        Contacts.openExistingContact(contact).then(contact => {
          if (contact) {
            Alert.alert('Success', 'Contact infos updated successfully !', [
              {
                text: 'Ok',
                onPress: handleLoading,
              }
            ]);
          }
        });
      }}
      activeOpacity={0.5}
    >
      {
        hasThumbnail ? 
        <Image
          source={{uri: thumbnailPath}}
          style={styles.contactAvatar}
          resizeMode='cover'
        />:
        <Placeholder contactName={getAbreviation()}/>
      }
      <Text style={styles.contactName}>{displayName}</Text>
    </TouchableOpacity>
  )
}