import React from 'react';
import { StyleSheet, View, Text, FlatList, Image, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import { setPic, setPage } from '../store';

class AllPictures extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1
    }
  }

  render() {
    const { pictures, navigation, setPicInfo } = this.props;
    return (
      pictures.length > 0 ?
      (
        <View style={styles.container}>
          <FlatList
            data={pictures}
            renderItem={({ item }) => {
              return (
              <TouchableHighlight onPress={() => {
                  setPicInfo(item, this.state.page);
                  navigation.navigate('SinglePicture');
                }}>
                <Image
                  style={styles.image}
                  key={item.id}
                  source={{ uri: item.previewURL }}
                  onC
                />
              </TouchableHighlight>
              )
            }}
            keyExtractor={item => item.id}
          />
        </View>
      )
      :
      (
        <View style={styles.container}>
          <Text> No Pictures Found </Text>
        </View>
      )
    )
  }
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  image: {
    height: 150,
    width: 150
  }
});

const mapState = (state) => {
  return {
    pictures: state.pictures
  }
}

const mapDispatch = (dispatch) => {
  return {
    setPicInfo: (pic, page) => {
      dispatch(setPic(pic));
      dispatch(setPage(page));
    }
  }
}

export default connect(mapState, mapDispatch)(AllPictures)
