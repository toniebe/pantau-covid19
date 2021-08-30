import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const ProtokolCard = ({image, title}) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={{width: 114, height: 114}} />
      <Text style={{fontSize: 18, fontWeight: '700'}}>{title}</Text>
    </View>
  );
};

export default ProtokolCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#eeeeee',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    paddingHorizontal: 10,
    paddingVertical: 35,
  },
});
