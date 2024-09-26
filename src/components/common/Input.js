import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const Input = ({ label, onChangeText, value, placeholder }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        autoCapitalize="none"
        autoCorrect={false}
        value={value}
        onChangeText={onChangeText}
        style={styles.input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    paddingLeft: 20,
    fontSize: 18,
    flex: 1,
    color: '#000',
  },
  input: {
    height: 50,
    width: 100,
    color: '#000',
    padding: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2,
  },
});

export { Input };
