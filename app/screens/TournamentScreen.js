import React from "react";
import { Text } from "react-native";
import styled from "styled-components";

const StyledView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #ffed02;
`;

const TournamentScreen = ({ navigation }) => (
  <StyledView>
    <Text>Tournament Screen</Text>
  </StyledView>
);

export default TournamentScreen;
