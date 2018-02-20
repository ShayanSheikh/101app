import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default class AllPictures extends React.Component {
  constructor() {
    super();
    this.state = {
      text: ''
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Search Pixabay!</Text>
        <TextInput
          style={{ height: 40 }}
          placeholder="Enter search terms"
          onChangeText={(text) => this.setState({ text })}
        />
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});