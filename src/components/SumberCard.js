import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import link from '../assets/Icon/Other/link.png';

const SumberCard = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <Text> Sumber: who.int</Text>
      <TouchableOpacity>
        <Image source={link} style={{width: 20, height: 20}} />
      </TouchableOpacity>
    </View>
  );
};

export default SumberCard;

const styles = StyleSheet.create({});
