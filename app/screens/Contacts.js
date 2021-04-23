import React from 'react';
import {Text, View, FlatList, Platform, StyleSheet} from 'react-native';
import {contacts} from '../config/data';
import colors from '../config/colors'
import ListItem from '../components/ListItem/ListItem'


const Contacts = ({navigation}) => {

  const handleRowPress = (item) => {
    navigation.navigate('Details')
  }

  return (
    <FlatList
      data={contacts}
      renderItem={({item}) =>
        <ListItem contact={item} onPress={() => handleRowPress(item)}/>
      }
      keyExtractor={(item) => item.email}
    />
  );
};
export default Contacts;
