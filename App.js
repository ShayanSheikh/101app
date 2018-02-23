import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux'
import store from './store';
import { Home, AllPictures, SinglePicture } from './components';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <RootNavigator />
      </Provider>
    );
  }
}

const RootNavigator = StackNavigator({
  Main: {
    screen: Home,
  },
  AllPictures: {
    screen: AllPictures,
  },
  SinglePicture: {
    screen: SinglePicture
  }
});
