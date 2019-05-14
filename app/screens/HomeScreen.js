import React from "react";
import {HomeViewContainer,WelcomeView,WelcomeText,OptionsView,SpecialButton,ButtonText,Button} from '../styles/HomeScreen';

const HomeScreen = ({ navigation }) => {
  return (
    <HomeViewContainer>
      <WelcomeView>
        <WelcomeText>Tournaments Generator</WelcomeText>
      </WelcomeView>
      <OptionsView>
        <SpecialButton
          onPress={() => navigation.navigate("Tournament")}
        >
          <ButtonText>New Tournament</ButtonText>
        </SpecialButton>
        <Button
          onPress={() => navigation.navigate("Description")}
        >
          <ButtonText>Description</ButtonText>
        </Button>
        <Button
          onPress={() => navigation.navigate("Description")}
          disabled
        >
          <ButtonText>About us</ButtonText>
        </Button>
      </OptionsView>
    </HomeViewContainer>
  );
};

export default HomeScreen;
