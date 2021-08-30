import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import locationIcon from '../assets/Icon/Other/location.png';
import suiteIcon from '../assets/Icon/Other/suite.png';
import phoneIcon from '../assets/Icon/Other/phone.png';

const RumahSakitCard = ({
  namaRS,
  jalanRS,
  updated,
  total,
  antrian,
  noTelpon,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <View style={styles.topLeft}>
          <Text style={{fontSize: 14, fontWeight: '700'}}>{namaRS}</Text>
          <Text
            style={{
              fontSize: 12,
              fontWeight: '400',
              color: '#707070',
            }}>
            {jalanRS}
          </Text>
          <Text style={{fontSize: 10, fontWeight: '400', color: '#707070'}}>
            {updated}
          </Text>
        </View>
        <View style={styles.topRight}>
          {total === 0 ? (
            <Text style={{fontSize: 14, fontWeight: '500', color: '#E3492B'}}>
              Penuh!
            </Text>
          ) : (
            <View>
              <Text style={{fontSize: 12, fontWeight: '400', color: '#2C2627'}}>
                Tersedia
              </Text>
              <Text style={{fontSize: 24, fontWeight: '700', color: '#2C2627'}}>
                {total}
              </Text>
              {antrian === 0 ? (
                <Text
                  style={{fontSize: 10, fontWeight: '400', color: '#2C2627'}}>
                  Tanpa Antrian
                </Text>
              ) : (
                <Text
                  style={{fontSize: 10, fontWeight: '400', color: '#2C2627'}}>
                  {antrian} Antrian
                </Text>
              )}
            </View>
          )}
        </View>
      </View>
      <View style={styles.mid}>
        <TouchableOpacity style={styles.button}>
          <View style={styles.buttonContainer}>
            <Image source={locationIcon} style={{height: 13, width: 13}} />
            <Text style={{fontSize: 12, fontWeight: '500'}}>Lihat Lokasi</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <View style={styles.buttonContainer}>
            <Image source={suiteIcon} style={{height: 10, width: 13}} />
            <Text style={{fontSize: 12, fontWeight: '500'}}>Lihat Lokasi</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.bot}>
        {noTelpon === null ? (
          <View style={styles.buttonCallnull}>
            <Text style={{fontSize: 14, fontWeight: '700', color: '#AAAAAA'}}>
              Tidak Tersedia
            </Text>
          </View>
        ) : (
          <TouchableOpacity style={styles.buttonCall}>
            <Image
              source={phoneIcon}
              style={{width: 13, height: 13, marginRight: 10}}
            />
            <Text style={{fontSize: 14, fontWeight: '700', color: 'white'}}>
              {noTelpon}
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default RumahSakitCard;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    flex: 1,
    marginHorizontal: 20,
    borderWidth: 1,
    borderColor: '#eeeeee',
    borderRadius: 5,
    paddingVertical: 10,
  },
  top: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  topLeft: {
    flex: 2,
    justifyContent: 'space-between',
  },
  topRight: {
    flex: 0.5,
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  mid: {
    flex: 1,
    marginVertical: 10,
    paddingHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#eeeeee',
    borderRadius: 8,
    paddingVertical: 20,
    marginHorizontal: 5,
  },
  buttonContainer: {
    alignItems: 'center',
  },
  bot: {
    marginHorizontal: 10,
  },
  buttonCall: {
    backgroundColor: '#3181CE',
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius: 6,
  },
  buttonCallnull: {
    backgroundColor: '#3181CErgba(20, 20, 20, 0.08)',
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius: 6,
  },
});
