import React,{useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  Dimensions,
} from 'react-native';
import SplashImage from '../assets/Images/splashScreen.png';

const {widht, height} = Dimensions.get('window');
const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('TabMenu');
    }, 3000);
  }, [navigation]);
  return (
    <View style={styles.container}>
      <Image source={SplashImage} style={styles.image} />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2C3D63',
  },
  image: {
    width: widht,
    height: height,
  },
});
