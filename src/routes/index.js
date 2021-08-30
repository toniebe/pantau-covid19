import React from 'react';
import {View, Text, Image} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import BerandaScreen from '../screen/BerandaScreen';
import RsScreen from '../screen/RsScreen';
import PencegahanScreen from '../screen/PencegahanScreen';
import RumahSakitScreen from '../screen/RumahSakitScreen';

import IconBeranda from '../assets/Icon/Menu/beranda.png';
import IconRS from '../assets/Icon/Menu/rumahsakit.png';
import IconPencegahan from '../assets/Icon/Menu/pencegahan.png';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

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
        component={PencegahanScreen}
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
    </Stack.Navigator>
  );
}
