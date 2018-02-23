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
        <Text> Tags: {pic.tags}</Text>
        <Text> User: {pic.user}</Text>
        <Text> Resolution: {pic.webformatWidth} x {pic.webformatHeight}</Text>
      </View>
    )
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '50%'
  },
  container: {
    alignItems: 'center',
  }
});

const mapState = (state) => {
  return {
    pic: state.utils.pic
  }
}

export default connect(mapState)(SinglePicture)
