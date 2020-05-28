import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import MainScreen from './src/screens/MainScreen';
import MapScreen from './src/screens/MapScreen';
import ContactScreen from './src/screens/ContactScreen';
import CreateContactScreen from './src/screens/CreateContactScreen';

const StackNavigator = createStackNavigator({
  'Main': {
    screen: MainScreen
  },
  'Maps': {
    screen: MapScreen,
    navigationOptions: {
      headerTitleStyle: {
        flex: 1
      },
      headerTitle: 'Mapa'
    }
  },
  'Contacts': {
    screen: ContactScreen,
    navigationOptions: {
      headerTitle: 'Contatos'
    }
  },
  'CreateContact': {
    screen: CreateContactScreen,
    navigationOptions: {
      headerTitle: 'Adicionar Contato'
    }
  }
}, {
  defaultNavigationOptions: {
    headerTitle: () => (
      <View style={{ flex: 4, alignItems: 'center', justifyContent: 'center' }}>
        <Image source={require('./assets/img/logo-2.png')}
          style={{ height: 30, width: 130 }} />
      </View>
    ),
    headerStyle: {
      backgroundColor: '#2282e3'
    },
    headerTintColor: '#fff',
    headerRight: () => (
      <TouchableOpacity style={{ flex: 1, marginRight: 15, justifyContent: 'center' }}>
        <Ionicons name="ios-exit" size={30} color="#fff" />
      </TouchableOpacity>
    )
  }
});

const AppContainer = createAppContainer(StackNavigator);

export default AppContainer;