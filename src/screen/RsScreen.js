import React, {useState, useEffect, useCallback} from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import wave from '../assets/Icon/Other/Path.png';
import kasurIcon from '../assets/Icon/Other/kasur.png';
import DropDownPicker from 'react-native-dropdown-picker';
import {RadioButton} from 'react-native-paper';

const RsScreen = ({navigation}) => {
  const [dataProvinsi, setDataProvinsi] = useState([]);
  const [dataCity, setDataCity] = useState([]);
  const [openProvinsi, setOpenProvinsi] = useState(false);
  const [openCity, setOpenCity] = useState(false);
  const [valueProvinsi, setValueProvinsi] = useState(null);
  const [valueCity, setValueCity] = useState(null);
  const [NamaProvinsi, setNamaProvinsi] = useState('');

  const getDataProvinsi = () => {
    return fetch('https://rs-bed-covid-api.vercel.app/api/get-provinces')
      .then(response => response.json())
      .then(json => {
        setDataProvinsi(json.provinces);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const getDataCity = valueProvinsi => {
    console.log(valueProvinsi);
    return fetch(
      `https://rs-bed-covid-api.vercel.app/api/get-cities?provinceid=${valueProvinsi}`,
    )
      .then(response => response.json())
      .then(json => {
        setDataCity(json.cities);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const onCountryOpen = useCallback(() => {
    setOpenCity(false);
  }, []);

  const onCityOpen = useCallback(() => {
    setOpenProvinsi(false);
  }, []);

  useEffect(() => {
    getDataProvinsi();
    getDataCity(valueProvinsi);
  }, [valueProvinsi]);

  const [checked, setChecked] = useState('1');

  return (
    <View style={{flex: 1, backgroundColor: '#2C3D63'}}>
      <StatusBar barStyle="dark-content" backgroundColor="rgb(255,255,255)" />
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <ImageBackground source={wave} style={styles.wave}>
            <Image source={kasurIcon} style={{width: 50, height: 50}} />
          </ImageBackground>
        </View>
        <View style={styles.headerRight}>
          <Text style={styles.fontHeader}>
            Ketersediaan Tempat Tidur Rumah Sakit
          </Text>
        </View>
      </View>
      <View style={styles.body}>
        <View style={styles.provinsi}>
          <Text style={{fontSize: 14, color: '#707070', fontFamily: 'Barlow'}}>
            Provinsi
          </Text>
          <DropDownPicker
            open={openProvinsi}
            onOpen={onCountryOpen}
            value={valueProvinsi}
            items={dataProvinsi}
            setOpen={setOpenProvinsi}
            setValue={setValueProvinsi}
            setItems={setDataProvinsi}
            schema={{
              label: 'name',
              value: 'id',
            }}
            placeholder="Pilih Provinsi"
            style={styles.dropdown}
          />
        </View>
        <View style={styles.provinsi}>
          <Text style={{fontSize: 14, color: '#707070', fontFamily: 'Barlow'}}>
            Kabupaten/Kota
          </Text>
          <DropDownPicker
            open={openCity}
            onOpen={onCityOpen}
            value={valueCity}
            items={dataCity}
            setOpen={setOpenCity}
            setValue={setValueCity}
            setItems={setDataCity}
            schema={{
              label: 'name',
              value: 'id',
            }}
            placeholder="Pilih Kabupaten/Kota"
            style={styles.dropdown}
          />
        </View>
        <View style={styles.tipe}>
          <Text style={styles.provinsi}>Tempat Tidur</Text>
          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: 20,
              marginTop: 10,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <RadioButton
                value="1"
                status={checked === '1' ? 'checked' : 'unchecked'}
                uncheckedColor="#eeeeee"
                onPress={() => setChecked('1')}
              />
              <Text
                style={{
                  color: checked === '1' ? '#141414' : '#BBBBBB',
                  fontWeight: '400',
                  fontSize: 18,
                }}>
                COVID-19
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginLeft: 20,
              }}>
              <RadioButton
                value="2"
                status={checked === '2' ? 'checked' : 'unchecked'}
                uncheckedColor="#eeeeee"
                onPress={() => setChecked('2')}
              />
              <Text
                style={{
                  color: checked === '2' ? '#141414' : '#BBBBBB',
                  fontWeight: '400',
                  fontSize: 18,
                }}>
                Non COVID-19
              </Text>
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={[
            {backgroundColor: valueCity === null ? '#eeeeee' : '#2C3D63'},
            styles.button,
          ]}
          onPress={() =>
            navigation.navigate('rsScreen', {
              provId: valueProvinsi,
              cityId: valueCity,
              tipe: checked,
            })
          }>
          <Text
            style={{
              color: valueCity === null ? '#AAAAAA' : 'white',
              fontWeight: 'bold',
            }}>
            Cari
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RsScreen;

const styles = StyleSheet.create({
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 20,
    backgroundColor: '#2C3D63',
  },
  fontHeader: {
    fontSize: 24,
    color: 'white',
    fontWeight: '700',
    fontFamily: 'san-serif',
  },
  wave: {
    width: 126,
    height: 103,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerLeft: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerRight: {
    alignItems: 'center',
    flex: 1,
  },
  body: {
    flex: 2,
    backgroundColor: 'white',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  provinsi: {
    marginTop: 20,
    marginHorizontal: 20,
  },
  dropdown: {
    marginTop: 10,
    marginBottom: 10,
    borderColor: '#cccccc',
  },
  tipe: {
    marginBottom: 20,
  },
  button: {
    marginHorizontal: 20,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
    borderRadius: 10,
  },
});
