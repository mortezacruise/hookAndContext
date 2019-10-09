import React, {useReducer, useState} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
const TextInputScreen = () => {
  const [name, setName] = useState('');
  return (
    <View style={styles.Container}>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={name}
        onChangeText={newText => setName(newText)}
      />
      <Text>my name is {name}</Text>
    </View>
  );
};
export default TextInputScreen;
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
  },
  input: {
    margin: 15,
    borderColor: 'red',
    borderWidth: 2,
  },
});
