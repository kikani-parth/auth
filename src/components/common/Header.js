import React from 'react';
import { Text, View, Platform, StyleSheet } from 'react-native';

const Header = ({ title }) => {
  //   const { textStyle, viewStyle } = styles;
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: '#fff',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,

    // Elevation for Android
    ...Platform.select({
      android: {
        elevation: 10,
      },
    }),
  },
  textStyle: {
    fontSize: 30,
    color: '#000',
  },
});

export default Header;
