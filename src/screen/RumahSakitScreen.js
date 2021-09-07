import React, {useEffect, useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
  FlatList,
} from 'react-native';

import HeaderNav from '../components/HeaderNav';
import RumahSakitCard from '../components/RumahSakitCard';

const RumahSakitScreen = ({route, navigation}) => {
  const {provId, cityId, tipe} = route.params;
  const [data, setData] = useState([]);
  const getHospital = (provId, cityId, tipe) => {
    return fetch(
      `https://rs-bed-covid-api.vercel.app/api/get-hospitals?provinceid=${provId}&cityid=${cityId}&type=${tipe}`,
    )
      .then(response => response.json())
      .then(json => {
        console.log(json.hospitals);
        setData(json.hospitals);
      })
      .catch(error => {
        console.error(error);
      });
  };

  useEffect(() => {
    getHospital(provId, cityId, tipe);
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <HeaderNav action={navigation} />
      <View style={styles.textInputContainer}>
        <TextInput
          placeholder="Cari Bedasarkan Nama Rumah Sakit"
          style={styles.textInput}
        />
      </View>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <RumahSakitCard
            namaRS={item.name}
            jalanRS={item.address}
            updated={item.info}
            total={item.bed_availability}
            antrian={item.queue}
            noTelpon={item.phone}
            navigasi={navigation}
            idHospital={item.id}
            tipe={tipe}
          />
        )}
      />
    </View>
  );
};

export default RumahSakitScreen;

const styles = StyleSheet.create({
  body: {
    flex: 4,
  },
  textInputContainer: {
    marginVertical: 10,
    marginHorizontal: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 8,
  },
});
