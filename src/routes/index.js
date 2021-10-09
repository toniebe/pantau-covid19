import React from 'react';
import {View, Text, Image} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import BerandaScreen from '../screen/BerandaScreen';
import RsScreen from '../screen/RsScreen';
import PencegahanScreen from '../screen/PencegahanScreen';
import RumahSakitScreen from '../screen/RumahSakitScreen';
import DetailKasurScreen from '../screen/DetailKasurScreen';

import IconBeranda from '../assets/Icon/Menu/beranda.png';
import IconRS from '../assets/Icon/Menu/rumahsakit.png';
import IconPencegahan from '../assets/Icon/Menu/pencegahan.png';
import GejalaScreen from '../screen/GejalaScreen';
import PerawatanScreen from '../screen/PerawatanScreen';
import {white} from 'react-native-paper/lib/typescript/styles/colors';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();

const IconBottom = props => {
  const {color, focused} = props.data;
  let colorSelected = focused ? '#2C3D63' : 'grey';
  return (
    <View>
      <Image
        source={props.image}
        style={{width: 25, height: 25, tintColor: colorSelected}}
      />
    </View>
  );
};

const topTab = () => {
  return (
    <View
      style={{
        backgroundColor: 'white',
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 10,
      }}>
      <Text style={{fontSize: 18, fontWeight: '600'}}>Cegah Covid-19</Text>
      <Text style={{fontSize: 18, fontWeight: '600'}}>
        dan bantu akhiri pandemi
      </Text>
      <TopTab.Navigator
        screenOptions={{
          swipeEnabled: true,
          tabBarLabelStyle: {fontSize: 12},
          tabBarActiveTintColor: '#000',
          tabBarPressColor: '#BF4A4C',
          tabBarItemStyle: {
            width: 'auto',
            // backgroundColor: '#BF4A4C',
            // borderRadius: 50,
            marginHorizontal: 15,
            marginVertical: 10,
            padding: 10,
            color: 'white',
          },
          tabBarStyle: {backgroundColor: 'white'},
        }}>
        <TopTab.Screen name="Pencegahan" component={PencegahanScreen} />
        <TopTab.Screen name="Gejala" component={GejalaScreen} />
        <TopTab.Screen name="Perawatan" component={PerawatanScreen} />
      </TopTab.Navigator>
    </View>
  );
};

const bottomTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Beranda"
        component={BerandaScreen}
        options={{
          headerShown: false,
          tabBarIcon: props => {
            return <IconBottom data={props} image={IconBeranda} />;
          },
        }}
      />
      <Tab.Screen
        name="RumahSakit"
        component={RsScreen}
        options={{
          headerShown: false,
          tabBarIcon: props => {
            return <IconBottom data={props} image={IconRS} />;
          },
        }}
      />
      <Tab.Screen
        name="Pencegahan"
        component={topTab}
        options={{
          headerShown: false,
          tabBarIcon: props => {
            return <IconBottom data={props} image={IconPencegahan} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default function Router() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TabMenu"
        component={bottomTab}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="rsScreen"
        component={RumahSakitScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="DetailKasur"
        component={DetailKasurScreen}
        options={{
          title: 'Detail Kasur',
        }}
      />
    </Stack.Navigator>
  );
}
