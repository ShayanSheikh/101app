import React from 'react';
import { StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Home from './components/Home';
import AllPictures from './components/AllPictures';

export default class App extends React.Component {
  render() {
    return (
      <RootNavigator />
    );
  }
}

const RootNavigator = StackNavigator({
  Main: {
    screen: Home,
    navigationOptions: {
      headerTitle: 'Home',
    },
  },
  AllPictures: {
    screen: AllPictures,
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
