import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import backIcon from '../assets/Icon/Other/back.png';

const HeaderNav = ({action, kota, provinsi, tipe}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity onPress={() => action.goBack()}>
            <Image source={backIcon} style={{width: 15, height: 15}} />
          </TouchableOpacity>
        </View>
        <View style={styles.headerMid}>
          <Text style={{fontSize: 18, fontWeight: '600'}}>{kota}</Text>
          <Text style={{fontSize: 12, fontWeight: '500'}}>
            {provinsi} -
            {tipe === '1' ? 'Tempat Tidur Covid' : 'Tempat Tidur Non Covid'}
          </Text>
        </View>
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.button} onPress={() => action.navigate('RumahSakit')}>
            <Text>Ubah</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default HeaderNav;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 3,
    paddingBottom: 10,
  },
  header: {
    flexDirection: 'row',
  },
  headerLeft: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerMid: {
    flex: 5,
    justifyContent: 'center',
  },
  headerRight: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
    // backgroundColor: 'red',
  },
  button: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#eeeeee',
  },
});
