import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { fetchPictures } from '../store';
import { connect } from 'react-redux';

class Home extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      text: ''
    }
  }

  render() {
    const { navigation, loadPictures } = this.props; 
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Search Pixabay!</Text>
        <TextInput
          style={styles.searchBox}
          textAlign="center"
          placeholder="Search"
          onChangeText={(text) => this.setState({ text })}
          onSubmitEditing={() => {
              loadPictures(this.state.text)
              navigation.navigate('AllPictures');
            }
          }
        />
      </View>
    )
  }
}

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

const mapDispatch = (dispatch) => {
  return {
    loadPictures: (query) => dispatch(fetchPictures(query, 1))
  }
}

export default connect(null, mapDispatch)(Home);
