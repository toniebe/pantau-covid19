import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const DetailKasurCard = ({jenis, tanggal, tersedia, kosong, antrian}) => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={{fontSize: 14, fontWeight: '700',fontFamily:'Barlow-Bold'}}>{jenis}</Text>
        <Text style={{fontSize: 10, fontWeight: '400', color: '#707070',fontFamily:'Rubik-Regular'}}>
          Update Terakhir : {tanggal}
        </Text>
      </View>
      <View style={styles.bottom}>
        <View style={styles.tersedia}>
          <Text style={{fontSize: 12, fontWeight: '500', color: '#157FFB',fontFamily:'Barlow-SemiBold'}}>
            Tersedia
          </Text>
          <Text style={{fontSize: 18, fontWeight: '500', color: '#157FFB',fontFamily:'Rubik-SemiBold'}}>
            {tersedia}
          </Text>
        </View>
        <View style={styles.kosong}>
          <Text style={{fontSize: 12, fontWeight: '500', color: '#30A64A',fontFamily:'Barlow-SemiBold'}}>
            Kosong
          </Text>
          <Text style={{fontSize: 18, fontWeight: '500', color: '#30A64A',fontFamily:'Rubik-SemiBold'}}>
            {kosong}
          </Text>
        </View>
        <View style={styles.antrian}>
          <Text style={{fontSize: 12, fontWeight: '500', color: '#FC1441',fontFamily:'Barlow-SemiBold'}}>
            Antrian
          </Text>
          <Text style={{fontSize: 18, fontWeight: '500', color: '#FC1441',fontFamily:'Rubik-SemiBold'}}>
            {antrian}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default DetailKasurCard;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#eeeeee',
    borderRadius: 4,
    marginHorizontal: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
  },
  top: {
    marginBottom: 10,
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  tersedia: {
    backgroundColor: 'rgba(21, 127, 251, 0.1)',
    paddingHorizontal: 25,
    paddingVertical: 15,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  kosong: {
    backgroundColor: 'rgba(48, 166, 74, 0.1)',
    paddingHorizontal: 25,
    paddingVertical: 15,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  antrian: {
    backgroundColor: 'rgba(252, 20, 65, 0.1)',
    paddingHorizontal: 25,
    paddingVertical: 15,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
