import React from 'react';
import {StyleSheet, Text, View, StatusBar, ScrollView} from 'react-native';
import PencegahanCard from '../components/PencegahanCard';
import SumberCard from '../components/SumberCard';
import Logo_cuci from '../assets/Icon/Pencegahan_Screen/cuci_tangan.png';
import Logo_masker from '../assets/Icon/Pencegahan_Screen/masker.png';
import Logo_jaga from '../assets/Icon/Pencegahan_Screen/jaga_jarak.png';
import Logo_jauhi from '../assets/Icon/Pencegahan_Screen/jauhi_kerumunan.png';
import Logo_mobilitas from '../assets/Icon/Pencegahan_Screen/kurangi_mobilitas.png';
import Logo_higenis from '../assets/Icon/Pencegahan_Screen/higenis.png';
import Logo_kontak from '../assets/Icon/Pencegahan_Screen/kurangi_kontak.png';
import Logo_Bantuan from '../assets/Icon/Pencegahan_Screen/cari_bantuan.png';

const PencegahanScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="rgb(255,255,255)" />
      <ScrollView style={styles.pencegahanScroll}>
        <View style={styles.pencegahanCard}>
          <PencegahanCard
            desc="Gunakan sabun dan air, atau cairan pembersih tangan berbahan alkohol"
            image={Logo_cuci}
            title="Cuci Tangan"
          />
          <PencegahanCard
            desc="Kenakan Masker jika pembatasan fisik tidak dimungkinkan"
            title="Pakai Masker"
            image={Logo_masker}
          />
        </View>
        <View style={styles.pencegahanCard}>
          <PencegahanCard
            desc="Selalu jaga jarak aman dengan orang yang batuk dan bersin"
            title="Jaga Jarak"
            image={Logo_jaga}
          />
          <PencegahanCard
            desc="Jauhi atau hindari diri dari kegiatan berkerumun"
            title="Jauhi Kerumunan"
            image={Logo_jauhi}
          />
        </View>
        <View style={styles.pencegahanCard}>
          <PencegahanCard
            desc="Jangan keluar rumah jika merasa tidak enak badan"
            title="Kurangi Mobilitas"
            image={Logo_mobilitas}
          />
          <PencegahanCard
            desc="Saat batuk atau bersin tutup mulut dan hidung Anda dengan lengan atau tisu"
            title="Tetap Higenis"
            image={Logo_higenis}
          />
        </View>
        <View style={styles.pencegahanCard}>
          <PencegahanCard
            desc="Jangan sentuh mata,hidung, atau mulut Anda"
            title="Kurangi Kontak"
            image={Logo_kontak}
          />
          <PencegahanCard
            desc="Jika demam, batuk, atau kesulitan bernafas, segera cari bantuan medis"
            title="Cari Bantuan"
            image={Logo_Bantuan}
          />
        </View>
        <SumberCard />
      </ScrollView>
    </View>
  );
};

export default PencegahanScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  pencegahanCard: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    // marginHorizontal: 10,
    marginTop: 10,
    marginBottom: 15,
  },
  pencegahanScroll: {
    // backgroundColor: 'blue',
    paddingHorizontal: 10,
  },
});
