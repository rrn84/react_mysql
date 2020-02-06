import React, { Component } from 'react';
import { TextInput, Text, Alert, Image, View, StyleSheet } from 'react-native';

export default class FirstScreen extends React.Component {  
  render() {
    return (
      <View style={styles.container}>
        <Text>
            Home.
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  }
});
