import React from 'react';
import { StyleSheet, View, Text, FlatList, Image, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import { setPic, setPage, fetchMorePictures } from '../store';

class AllPictures extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1
    }
    this.handleLoadMore = this.handleLoadMore.bind(this);
  }

  handleLoadMore() {
    if (this.state.page >= 25) return;
    this.setState({
      page: this.state.page + 1
    }, () => this.props.getPictures(this.props.query, this.state.page))
  }

  render() {
    const { pictures, navigation, setPicInfo } = this.props;
    return (
      pictures.length > 0 ?
      (
        <View style={styles.container}>
          <FlatList
            style={styles.flatlist}
            data={pictures}
            renderItem={({ item }) => {
              return (
              <TouchableHighlight onPress={() => {
                  setPicInfo(item);
                  navigation.navigate('SinglePicture');
                }}>
                <Image
                  style={styles.image}
                  key={item.id}
                  source={{ uri: item.previewURL }}
                />
              </TouchableHighlight>
              )
            }}
            keyExtractor={item => item.id}
            onEndThreshold={0}
            onEndReached={this.handleLoadMore}
            numColumns={2}
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
    justifyContent: 'space-between'
  },
  flatlist: {
    flexDirection: 'column',
  },
  image: {
    height: 150,
    width: 150
  }
});

const mapState = (state) => {
  return {
    pictures: state.pictures,
    query: state.utils.query
  }
}

const mapDispatch = (dispatch) => {
  return {
    setPicInfo: (pic) => {
      dispatch(setPic(pic));
    },
    getPictures: (query, page) => {
      dispatch(fetchMorePictures(query, page));
    }
  }
}

export default connect(mapState, mapDispatch)(AllPictures)
