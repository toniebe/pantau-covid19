import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

export default function PencegahanCard({image, title, desc}) {
  return (
    <View style={styles.cointainer}>
      <Image source={image} style={{width: 75, height: 75}} />
      <Text
        style={{
          textAlign: 'center',
          fontSize: 18,
          fontWeight: '700',
          marginVertical: 10,
        }}>
        {title}
      </Text>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 14,
          lineHeight: 15,
          fontWeight: '400',
        }}>
        {desc}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  cointainer: {
    flex: 1,
    borderColor: '#eaeaea',
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingTop: 5,

    marginHorizontal: 10,
    alignItems: 'center',
  },
});
