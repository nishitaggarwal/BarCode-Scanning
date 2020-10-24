import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import BarCodeScreen from './Screens/BarCodeScreen';


export default class App extends React.Component {
  render(){
    return (
        <AppContainer />
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Scan: {screen: BarCodeScreen},
})

const AppContainer =  createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});