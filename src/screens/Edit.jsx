import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, SafeAreaView, Alert, PermissionsAndroid } from 'react-native';
import Contacts from 'react-native-contacts';
import ImagePicker from 'react-native-image-crop-picker';
import { styles } from '../assets/styles';

const Edit = (props) => {
  const {contact} = props.route.params;
  const [contactObj, setContactObj] = useState(contact);
  const [isEditing, setIsEditing] = useState(false);

  const onChangeText = (propName, value) => {
    setContactObj({
      ...contactObj,
      [propName]: value
    });
  }

  const onSetPhoto = () => {
    /*ImagePicker.openCamera({
      width: 200,
      height: 200,
      cropping: true,
    }).then(({path}) => {
      setContactObj({
        ...contactObj,
        thumbnailPath: 'https://api.maguru.dk/normal_contact.png',
        hasThumbnail: true
      });
    });*/
    if (isEditing) {
      return false;
    }
    
    Contacts.openExistingContact(contactObj).then(contact => {
      if (contact) {
        Alert.alert('Success', 'Contact infos updated successfully !', [
          {
            text: 'Ok',
            onPress: props.navigation.goBack,
          }
        ]);
      }
    });
  }

  useEffect(() => {
    console.log(contactObj);
    const editContact = () => {
      // delete contactObj.phoneNumbers;
      Contacts.updateContact(contactObj).then((contact) => {
        setIsEditing(false);
        Alert.alert('Success', 'Contact infos updated successfully !', [
          {
            text: 'Ok',
            onPress: props.navigation.goBack,
          }
        ]);
      }).catch(error => {
        console.log(error);
      })
    }

    const onEdit = () => { 
      if (Platform.OS === 'android') {
        PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.WRITE_CONTACTS, {
          title: 'Contacts',
          message: 'This app would like to edit your contacts.',
        }).then(() => {
          editContact();
        });
      } else {
        editContact();
      }    
    }  

    if (isEditing) {
      onEdit();
    }

  }, [isEditing]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>
            Family Name
          </Text>
          <TextInput 
            placeholder='Family Name'
            value={contactObj.familyName || ''}
            onChangeText={text => onChangeText('familyName', text)}
            style={styles.inputText}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>
            Given Name
          </Text>
          <TextInput 
            placeholder='Given Name'
            value={contactObj.givenName || ''}
            onChangeText={text => onChangeText('givenName', text)}
            style={styles.inputText}
          />
        </View>
        <View style={{
          marginBottom: 10
        }}>
          <Button 
            title={isEditing ? 'Saving...' : 'Save changes'}
            disabled={isEditing}
            onPress={() => setIsEditing(true)}          
            style={{marginBottom: 10}}
          />
        </View>
        <View style={{
          marginBottom: 10
        }}>
          <Button 
            title='Edit picture'
            onPress={onSetPhoto}          
            color='darkred'
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Edit