import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import DescriptionScreen from '../screens/DescriptionScreen';

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Description: {
      screen: DescriptionScreen,
    },
  },
  { initialRouteName: 'Home' }
);

export default createAppContainer(AppNavigator);
