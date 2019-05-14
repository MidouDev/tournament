
import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from "../screens/HomeScreen";
import DescriptionScreen from "../screens/DescriptionScreen";
import TournamentScreen from "../screens/TournamentScreen";

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: ({ navigation }) => ({
        title: "Home"
      })
    },
    Description: {
      screen: DescriptionScreen,
      navigationOptions: { title: "Description" }
    },
    Tournament: {
      screen: TournamentScreen,
      navigationOptions: { title: "Tournament" }
    }
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#a50044"
      },
      headerTintColor: "#edbb00",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
  }
);

export default createAppContainer(AppNavigator);
