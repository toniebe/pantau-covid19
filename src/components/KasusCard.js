import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const KasusCard = ({status, total, warna, bg_color}) => {
  return (
    <View style={[{backgroundColor: bg_color}, styles.container]}>
      <Text style={[{color: warna}, styles.status]}>{status}</Text>
      <Text style={[{color: warna}, styles.angka]}>{total}</Text>
    </View>
  );
};

export default KasusCard;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    alignContent: 'space-between',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 15,
    flex: 1,
    marginHorizontal: 10,
  },
  status: {
    marginVertical: 5,
    marginHorizontal: 7,
    marginBottom: 15,
    fontSize: 17,
  },
  angka: {
    marginVertical: 5,
    marginHorizontal: 7,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'right',
  },
});
