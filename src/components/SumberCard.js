import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image, Linking} from 'react-native';
import link from '../assets/Icon/Other/link.png';

const SumberCard = () => {

  const linking = () => {
    Linking.openURL('https://www.who.int/')
  }

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <Text> Sumber: who.int</Text>
      <TouchableOpacity onPress={() => linking()}>
        <Image source={link} style={{width: 20, height: 20}} />
      </TouchableOpacity>
    </View>
  );
};

export default SumberCard;

const styles = StyleSheet.create({});
