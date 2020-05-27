import React from 'react';
import { Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import MainScreen from './src/screens/MainScreen';

const StackNavigator = createStackNavigator({
  'Main': {
    screen: MainScreen,
    navigationOptions: {
      headerTitle: (
        <Image source={{uri: 'https://pt.freelogodesign.org/Content/img/logo-samples/flooop.png'}} 
        style={{height: 40, width: 100, justifyContent: 'center'}} />
      ),
      // title: 'ANDRADE Corp.',
      headerTitleStyle: {
        alignSelf: 'center',
        color: '#fff'
      },
      headerStyle: {
        backgroundColor: '#2282e3'
      }
    }
  }
});

const AppContainer = createAppContainer(StackNavigator);

export default AppContainer;