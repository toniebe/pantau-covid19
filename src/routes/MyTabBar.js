import React from 'react';
import {Animated, View, TouchableOpacity, StyleSheet} from 'react-native';

function MyTabBar({state, descriptors, navigation, position}) {
  return (
    <View style={{flexDirection: 'row',paddingHorizontal:15,paddingVertical:11,}}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({name: route.name, merge: true});
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const inputRange = state.routes.map((_, i) => i);
        const opacity = position.interpolate({
          inputRange,
          outputRange: inputRange.map(i => (i === index ? 1 : 0)),
        });

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={isFocused ? styles.contentActive : styles.content}>
            <Animated.Text style={{opacity},isFocused ? styles.textActive: styles.textLabel}>{label}</Animated.Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  textLabel:{
    color:'#BBBBBB',
    fontSize: 15
  },
  textActive:{
    color:'white',
    fontSize: 15
  },
  contentActive:{
    flex:1,
    borderRadius:20,
    backgroundColor:'#BF4A4C',
    paddingHorizontal:5,
    paddingVertical:5,
    // marginRight:0,
    justifyContent:'center',
    alignItems:'center'
  },
  content:{
    flex:1,
    paddingHorizontal:5,
    paddingVertical:5,
    // marginRight:10,
    justifyContent:'center',
    alignItems: 'center'
  }
})

export default MyTabBar 