import React from 'react';
import {StyleSheet, Text, View, FlatList, ScrollView} from 'react-native';
import SumberCard from '../components/SumberCard';

const PerawatanScreen = () => {
  const tindakan = [
    'Hubungi penyedia layanan kesehatan atau hotline COVID-19 untuk mendapatkan informasi terkait tempat dan waktu untuk menjalani tes',
    'Taati prosedur pelacakan kontak untuk menghentikan penyebaran virus.',
    'Jika tes tidak tersedia, tetaplah di rumah dan jangan lakukan kontak dengan orang lain selama 14 hari',
    'Selama masa karantina, jangan pergi ke kantor, sekolah, atau tempat-tempat umum. Mintalah seseorang mencukupi kebutuhan Anda.',
    'Jaga jarak minimal 1 meter dari orang lain, termasuk anggota keluarga Anda.',
    'Kenakan masker medis untuk melindungi orang lain, termasuk jika/ketika Anda perlu meminta perawatan medis.',
    'Cuci tangan Anda secara rutin.',
    'Gunakan ruangan yang terpisah dari anggota keluarga lain, dan jika tidak memungkinkan, selalu kenakan masker medis.',
    'Pastikan ventilasi ruangan selalu baik.',
    'Jika menggunakan kamar bersama orang lain, beri jarak antar-tempat tidur minimal 1 meter.',
    'Amati diri Anda sendiri apakah ada gejala apa pun selama 14 hari.',
    'Segera hubungi penyedia layanan kesehatan jika Anda mengalami salah satu tanda bahaya berikut: sulit bernapas, sulit berbicara atau bergerak, bingung, atau merasakan nyeri di dada.',
    'Tetaplah positiff dengan terus berinteraksi dengan orang-orang terdekat melalui telepon atau internet dan dengan berolahraga di rumah',
  ];
  return (
    <View style={styles.container}>
      <ScrollView style={styles.content}>
        <View>
          <Text style={styles.title}>Isolasi Mandiri</Text>
          <Text style={{fontSize: 14, color: '#707070', marginBottom: 10}}>
            Setelah terpapar orang yang terinfeksi COVID-19 lakukan tidakan
            berikut:
          </Text>
          <FlatList
            data={tindakan}
            renderItem={({item}) => (
              <View style={styles.tindakan}>
                <Text style={{color: '#2C3D63', marginRight: 10}}>
                  {'\u2B24'}
                </Text>
                <Text style={{color: '#707070', paddingHorizontal: 10}}>
                  {item}
                </Text>
              </View>
            )}
          />
        </View>
        <View>
          <Text style={styles.title}>Terapi Medis</Text>
          <Text style={{fontSize: 14, color: '#707070', marginBottom: 10}}>
            Setelah terpapar orang yang terinfeksi COVID-19 lakukan tidakan
            berikut:
          </Text>
          <View>
            <View style={styles.tindakan}>
              <Text style={{color: '#2C3D63', marginRight: 10}}>
                {'\u2B24'}
              </Text>
              <Text style={{color: '#707070', paddingHorizontal: 10}}>
                Perawatan pendukung yang optimal meliputi pemberian oksigen bagi
                pasien yang sakit parah dan berisiko mengalami sakit parah,
                serta alat bantu pernapasan canggih, seperti ventilator, bagi
                pasien yang sakit kritis.
              </Text>
            </View>
            <View style={styles.tindakan}>
              <Text style={{color: '#2C3D63', marginRight: 10}}>
                {'\u2B24'}
              </Text>
              <Text style={{color: '#707070', paddingHorizontal: 10}}>
                Dexamethasone adalah kortikosteroid yang dapat membantu
                mengurangi durasi penggunaan ventilator dan menyelamatkan nyawa
                pasien yang sakit parah dan kritis.
              </Text>
            </View>
          </View>
          <Text style={{fontSize: 14, color: '#707070', marginBottom: 10}}>
            WHO tidak merekomendasikan perawatan mandiri dengan obat apa pun,
            termasuk antibiotik, sebagai pencegahan atau pengobatan untuk
            COVID-19.
          </Text>
        </View>
        <SumberCard />
      </ScrollView>
    </View>
  );
};

export default PerawatanScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    marginHorizontal: 15,
    marginVertical: 10,
  },
  tindakan: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  title: {fontSize: 24, fontWeight: '600', marginBottom: 15},
});
