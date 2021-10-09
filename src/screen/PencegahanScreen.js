import React from 'react';
import {StyleSheet, Text, View, StatusBar} from 'react-native';

const PencegahanScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="rgb(255,255,255)" />
      <Text>Pencegahaan Screen</Text>
    </View>
  );
};

export default PencegahanScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
