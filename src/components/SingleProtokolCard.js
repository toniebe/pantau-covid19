import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import cuciIcon from '../assets/Icon/Pencegahan/cuci_tangan.png';

const SingleProtokolCard = () => {
  return (
    <View style={styles.container}>
      <Image source={cuciIcon} style={{width: 114, height: 114}} />

      <Text style={{fontSize: 18, fontWeight: '700', textAlign: 'center',fontFamily:'Barlow-Bold'}}>
        Mencuci Tangan
      </Text>
    </View>
  );
};

export default SingleProtokolCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderWidth: 1,
    borderColor: '#eeeeee',
    borderRadius: 8,
    paddingVertical: 20,
  },
});
