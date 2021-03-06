import React from 'react';
import {View, Text, Image} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import BerandaScreen from '../screen/BerandaScreen';
import SplashScreen from '../screen/SplashScreen';
import RsScreen from '../screen/RsScreen';
import PencegahanScreen from '../screen/PencegahanScreen';
import RumahSakitScreen from '../screen/RumahSakitScreen';
import DetailKasurScreen from '../screen/DetailKasurScreen';
import IconBeranda from '../assets/Icon/Menu/beranda.png';
import IconRS from '../assets/Icon/Menu/rumahsakit.png';
import IconPencegahan from '../assets/Icon/Menu/pencegahan.png';
import GejalaScreen from '../screen/GejalaScreen';
import PerawatanScreen from '../screen/PerawatanScreen';
import MyTabBar from './MyTabBar'

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
        paddingVertical: 10,
      }}>
      <View
        style={{
          paddingHorizontal: 20,
        }}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: '600',
            fontFamily:'Barlow-SemiBold'
          }}>
          Cegah COVID-19
        </Text>
        <Text style={{fontSize: 18, fontWeight: '600',fontFamily:'Barlow-SemiBold'}}>
          dan bantu akhiri pandemi
        </Text>
      </View>
      <TopTab.Navigator
        tabBar={props => <MyTabBar {...props} />}
        screenOptions={{
          swipeEnabled: true,
          tabBarLabelStyle: {fontSize: 12},
          tabBarPressColor: '#BF4A4C',
          tabBarItemStyle: {
            width: 'auto',
            marginHorizontal: 20,
            marginVertical: 10,
            paddingHorizontal: 10,
            color: 'white',
          },
        }}
        >
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
        name="PencegahanTab"
        component={topTab}
        options={{
          headerShown: false,
          tabBarIcon: props => {
            return <IconBottom data={props} image={IconPencegahan} />;
          },
          tabBarLabel:'Pencegahan',
        }}
      />
    </Tab.Navigator>
  );
};

export default function Router() {
  return (
    <Stack.Navigator initialRouteName='Splashscreen' >
      <Stack.Screen 
        name="Splashscreen"
        component={SplashScreen}
        options={{headerShown:false}}
      />
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
