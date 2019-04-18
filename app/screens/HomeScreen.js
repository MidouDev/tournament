import React from "react";
import { Text, Button } from "react-native";
import styled from "styled-components";

const HomeViewContainer = styled.View`
  background-color: #ffed02;
  flex: 1;
`;

const OptionsView = styled.View`
  flex: 5;
  align-items: center;
  justify-content: center;
`;

const WelcomeView = styled(OptionsView)`
  flex: 1;
`;

const WelcomeText= styled.Text`
  font-size: 20;
`

const HomeScreen = ({ navigation }) => {
  return (
    <HomeViewContainer>
      <WelcomeView>
        <WelcomeText>Welcome to our tournaments generator</WelcomeText>
      </WelcomeView>
      <OptionsView>
        <Button
          title="Go to Description"
          onPress={() => navigation.navigate("Description")}
        />
      </OptionsView>
    </HomeViewContainer>
  );
};

export default HomeScreen;
