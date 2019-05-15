import React from "react";
import {
  StyledView,
  TitleText,
  OptionsView,
  Button,
  ButtonText
} from "../styles/TournamentScreen";

const TournamentScreen = ({ navigation }) => (
  <StyledView>
    <TitleText>Choose Tournament Mode</TitleText>
    <OptionsView>
      <Button primary onPress={() => navigation.navigate("Settings",{ mode : 'single'})}>
        <ButtonText>1 vs 1</ButtonText>
      </Button>
      <Button onPress={() => navigation.navigate("Settings",{ mode : 'multi'})}>
        <ButtonText>2 vs 2</ButtonText>
      </Button>
    </OptionsView>
  </StyledView>
);

export default TournamentScreen;
