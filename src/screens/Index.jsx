/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, {useEffect, useState} from 'react';
 import {
   SafeAreaView,
   StatusBar,
   ScrollView,
   Platform,
   PermissionsAndroid,
 } from 'react-native';
 import Contacts from 'react-native-contacts';
 import {styles} from '../assets/styles';
 import Contact from '../components/Contact';
 import Loader from '../components/Loader';
 
 const Index = ({navigation}) => {
   const [contactsList, setContactsList] = useState([]);
   const [isLoading, setIsLoading] = useState(true);
 
   useEffect(() => {
     const loadContacts = () => {
       Contacts.getAll()
         .then(contacts => {
           setContactsList(contacts.filter(c => c.phoneNumbers.length > 0));
           console.log(contacts.filter(c => c.phoneNumbers.length > 0));
           setIsLoading(false);
         })
         .catch(e => {
           setIsLoading(false);
         });
       Contacts.checkPermission();
     };

      /*const unsubscribe = navigation.addListener('focus', () => {
        if (Platform.OS === 'android') {
          PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
            title: 'Contacts',
            message: 'This app would like to view your contacts.',
          }).then(() => {
            loadContacts();
          });
        } else {
          loadContacts();
        }
      });*/

      if (isLoading) {
        if (Platform.OS === 'android') {
          PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
            title: 'Contacts',
            message: 'This app would like to view your contacts.',
          }).then(() => {
            loadContacts();
          });
        } else {
          loadContacts();
        }
      }

      // Return the function to unsubscribe from the event so it gets removed on unmount
      // return unsubscribe;
   }, [/*navigation, */isLoading]);
 
   return (
     <SafeAreaView style={styles.container}>
       <StatusBar barStyle={'dark-content'} backgroundColor='#FFF' />
       {isLoading ?
         <Loader />:
         <ScrollView contentContainerStyle={styles.scrollContainer}>
           {contactsList.map(contact => (
             <Contact key={contact.recordID} contact={contact} handleLoading={() => setIsLoading(true)} />
           ))}
         </ScrollView>
       }
     </SafeAreaView>
   );
 };
 
 export default Index;
 