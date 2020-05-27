import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import MainScreen from './src/screens/MainScreen';

const StackNavigator = createStackNavigator({
  'Main': {
    screen: MainScreen,
    navigationOptions: {
      title: 'Faz Tudo!',
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