import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import bannerLogo from '../assets/Images/banner.png';
import KasusCard from '../components/KasusCard';
import refreshIcon from '../assets/Icon/Other/refresh.png';
import SingleProtokolCard from '../components/SingleProtokolCard';
import ProtokolCard from '../components/ProtokolCard';
import maskerIcon from '../assets/Icon/Pencegahan/memakai_masker.png';
import jarakIcon from '../assets/Icon/Pencegahan/menjaga_jarak.png';
import kerumunan from '../assets/Icon/Pencegahan/menjauhi_kerumunan.png';
import mobilitas from '../assets/Icon/Pencegahan/mengurangi_mobilitas.png';
import virusIcon from '../assets/Icon/Other/virus.png';
import moment from 'moment';

const BerandaScreen = () => {
  const [data, setdata] = useState([]);
  const [kasus, setkasus] = useState(0);
  const [dirawat, setdirawat] = useState(0);
  const [meninggal, setmeninggal] = useState(0);
  const [sembuh, setsembuh] = useState(0);

  const getData = () => {
    return fetch('https://covid19.mathdro.id/api/countries/ID')
      .then(response => response.json())
      .then(json => {
        setdata(json);
        setkasus(json.confirmed.value);
        setdirawat(json.recovered.value);
        setmeninggal(json.deaths.value);
        setsembuh(kasus - dirawat - meninggal);
      })
      .catch(error => {
        console.error(error);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="rgb(255,255,255)" />
      <Text style={styles.textIntro}>Pantau COVID-19 di Indonesia</Text>
      <View style={styles.banner}>
        <View style={styles.bannerImage}>
          <Image source={bannerLogo} style={{width: 100, height: 100}} />
        </View>
        <View style={styles.bannerQuote}>
          <Image source={virusIcon} style={styles.virus} />
          <Text style={styles.Quote1}>
            Jaga Diri dan Keluarga anda dari Virus Corona.
          </Text>
          <Text style={styles.Quote2}>
            Bersama turunkan Kurva Ksus Positif COVID-19 di Indonesia
          </Text>
          <Image source={virusIcon} style={styles.virus2} />
        </View>
      </View>
      <View style={styles.kasus}>
        <View style={styles.headerKasus}>
          <View>
            <Text style={{fontSize: 30, fontWeight: '600'}}>Kasus</Text>
            <Text style={{fontSize: 16}}>
              Update Terakhir : {moment(data.lastUpdate).format('LL')}
            </Text>
          </View>
          <View>
            <TouchableOpacity onPress={() => getData() }>
              <Image source={refreshIcon} style={{width: 20, height: 20}} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.kasusCard}>
          <KasusCard
            status="Kasus"
            total={kasus}
            warna="#FC1441"
            bg_color="rgba(252, 20, 20, 0.1)"
          />
          <KasusCard
            status="Dirawat"
            total={dirawat}
            warna="#157FFB"
            bg_color="rgba(21, 127, 251, 0.1)"
          />
        </View>
        <View style={styles.kasusCard}>
          <KasusCard
            status="Sembuh"
            total={dirawat}
            warna="#30A64A"
            bg_color="rgba(48, 166, 74, 0.1)"
          />
          <KasusCard
            status="Meninggal Dunia"
            total={meninggal}
            warna="#6D757D"
            bg_color="rgba(109, 117, 125, 0.1)"
          />
        </View>
      </View>
      <View style={styles.protokol}>
        <Text style={{fontSize: 18, fontWeight: '600'}}>
          Patuhi Protokol 5M
        </Text>
      </View>
      <SingleProtokolCard />
      <View style={styles.protokolCard}>
        <ProtokolCard image={maskerIcon} title="Memakai Masker" />
        <ProtokolCard image={jarakIcon} title="Menjaga Jarak" />
      </View>
      <View style={styles.protokolCard}>
        <ProtokolCard image={kerumunan} title="Memakai Masker" />
        <ProtokolCard image={mobilitas} title="Menjaga Jarak" />
      </View>
    </ScrollView>
  );
};

export default BerandaScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  textIntro: {
    fontSize: 20,
    fontWeight: '600',
    marginHorizontal: 10,
    marginTop: 10,
  },
  banner: {
    flexDirection: 'row',
    backgroundColor: '#2C3D63',
    marginHorizontal: 10,
    marginVertical: 15,
    borderRadius: 9,
    padding: 20,
  },
  bannerImage: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bannerQuote: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  Quote1: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  Quote2: {
    color: 'white',
  },
  kasus: {
    marginHorizontal: 10,
  },
  headerKasus: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  kasusCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  protokol: {
    margin: 10,
  },
  protokolCard: {
    marginHorizontal: 5,
    flexDirection: 'row',
    alignContent: 'space-around',
  },
  virus: {
    width: 25,
    height: 25,
    position: 'absolute',
    top: -5,
    left: 13,
  },
  virus2: {
    width: 25,
    height: 25,
    position: 'absolute',
    bottom: -10,
    right: -10,
  },
});
