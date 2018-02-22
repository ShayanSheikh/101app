import React from 'react';
import { StyleSheet, View, Text, Image} from 'react-native';
import { connect } from 'react-redux';

const SinglePicture = (props) => {
  const { pic } = props;
  return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{ uri: pic.previewURL }}
        />
      </View>
    )
}

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
    pic: state.currPic.pic
  }
}

export default connect(mapState)(SinglePicture)
