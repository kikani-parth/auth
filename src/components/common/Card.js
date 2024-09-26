import React from 'react';
import { View, Text, StyleSheet, Image, Platform } from 'react-native';

const Card = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    marginHorizontal: 5,
    marginTop: 10,
    // padding: 5,
    // backgroundColor: '#fff',

    // Shadow for IOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,

    // Elevation for Android
    ...Platform.select({
      android: {
        elevation: 10,
      },
    }),
  },
});

export default Card;
