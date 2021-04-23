import React from 'react'
import {StyleSheet, View, Text, TouchableHighlight, Image} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import {capitalizeFirstLetter} from '../../helpers/string'
import colors from '../../config/colors'
import styles, {CHEVRON_SIZE} from './styles'

const icon = (Platform.OS === 'android') ? 'md-arrow-forward' : 'ios-arrow-forward' 

const ListItem = ({contact, onPress}) => {
  const name = `${capitalizeFirstLetter(contact.name.first)} ${capitalizeFirstLetter(contact.name.last)}`
    return (
      <TouchableHighlight
        onPress={onPress}
        underlayColor={colors.rowUnderlay}
      >
        <View>
          <View style={styles.row}>
            <Image
              source={{ uri: contact.picture.thumbnail }}
              style={styles.avatar}
            />
          </View>
          <View>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.email}>{contact.email}</Text>
          </View>
          <View style={styles.chevronContainer}>
            <Icon
              name={(Platform.OS === 'android') ? 'md-arrow-forward' : 'ios-arrow-forward'}
              size={CHEVRON_SIZE}
              color={colors.secondaryText}
              style={styles.chevron}
            />
          </View>

        </View>
      </TouchableHighlight>
    )
}

export default ListItem