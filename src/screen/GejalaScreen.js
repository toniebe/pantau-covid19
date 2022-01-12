import React, {useState} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import SumberCard from '../components/SumberCard';

const GejalaScreen = () => {
  const data = [
    {title: 'Gejala Umum', gejala: ['Demam', 'Batuk Kering', 'Kelelahan']},
    {
      title: 'Gejala Sedikit Tidak Umum',
      gejala: [
        'Rasa tidak nyaman dan nyeri',
        'Nyeri Tenggorokan',
        'Diare',
        'Konjungtivitis',
        'Sakit Kepala',
      ],
    },
    {
      title: 'Gejala Serius',
      gejala: [
        'Kesulitan bernapas atau sesak napas',
        'Nyeri dada atau rasa tertekan pada dada',
        'Kelelahan',
      ],
    },
  ];

  const [gejala, setGejala] = useState([data.gejala]);

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <View style={styles.Card}>
            <Text style={styles.title}>{item.title}</Text>
            <FlatList
              data={item.gejala}
              renderItem={({item}) => (
                <View style={styles.gejala}>
                  <Text
                    style={{
                      color: '#2C3D63',
                      marginRight: 10,
                      marginBottom: 10,
                    }}>
                    {'\u2B24'}
                  </Text>
                  <Text
                    style={{
                      fontSize: 14,
                      color: '#707070',
                      lineHeight: 16.8,
                      marginBottom: 10,
                    }}>
                    {item}
                  </Text>
                </View>
              )}
            />
          </View>
        )}
        ListFooterComponent={
          <View style={{marginHorizontal: 20}}>
            <SumberCard />
          </View>
        }
      />
    </View>
  );
};

export default GejalaScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  Card: {
    flex: 1,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  title: {
    fontWeight: '600',
    fontSize: 24,
    color: 'black',
    marginBottom: 10,
  },
  gejala: {
    flexDirection: 'row',
  },
});
