import React from "react";
import { Button } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from "../screens/HomeScreen";
import DescriptionScreen from "../screens/DescriptionScreen";

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: ({navigation}) => ({
        title: "Home",
        headerRight: (
          <Button
            onPress={navigation.getParam('increaseCount')}
            title="+1"
            color="#e17c00"
          />
        )
      }),
    },
    Description: {
      screen: DescriptionScreen,
      navigationOptions: { title: "Description" }
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
