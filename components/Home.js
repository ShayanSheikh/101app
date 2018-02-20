import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { getPictures } from '../api/pixabay';

export default class Home extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      text: ''
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Search Pixabay!</Text>
        <TextInput
          style={styles.searchBox}
          textAlign="center"
          placeholder="Search"
          onChangeText={(text) => this.setState({ text })}
          onSubmitEditing={() => {
              getPictures(this.state.text)
              this.props.navigation.navigate('AllPictures');
            }
          }
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
  },
  title: {
    fontSize: 20,
    color: 'red',
    fontWeight: 'bold'
  }
});
