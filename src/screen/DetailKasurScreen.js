import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import DetailKasurCard from '../components/DetailKasurCard';

const DetailKasurScreen = ({route}) => {
  const {idHospital, tipe, alamat, telpon, namaRS} = route.params;

  const [data, setData] = useState([]);

  const getBedDetail = (idHospital, tipe) => {
    return fetch(
      `https://rs-bed-covid-api.vercel.app/api/get-bed-detail?hospitalid=${idHospital}&type=${tipe}`,
    )
      .then(response => response.json())
      .then(json => {
        // console.log(json.data.bedDetail);
        setData(json.data.bedDetail);
      })
      .catch(error => {
        console.error(error);
      });
  };

  useEffect(() => {
    getBedDetail(idHospital, tipe);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.judul}>
        <Text style={{fontSize: 20, fontWeight: '700'}}>{namaRS}</Text>
        <Text style={{fontSize: 14, fontWeight: '400', color: '#707070'}}>
          {alamat}
        </Text>
        <Text style={{fontSize: 14, fontWeight: '400', color: '#707070'}}>
          {telpon}
        </Text>
      </View>

      {
        data.length > 0 ? (
          <FlatList
        data={data}
        renderItem={({item}) => (
          <DetailKasurCard
            jenis={item.stats.title}
            tanggal={item.time}
            tersedia={item.stats.bed_available}
            kosong={item.stats.bed_empty}
            antrian={item.stats.queue}
          />
        )}
      />
        ):(
          <ActivityIndicator size="large" color="#0000ff" />
        )
      }
    </View>
  );
};

export default DetailKasurScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  judul: {
    marginHorizontal: 20,
    marginVertical: 10,
  },
});
