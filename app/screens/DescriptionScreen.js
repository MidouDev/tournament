import React from "react";
import { Text } from "react-native";
import styled from "styled-components";

const StyledView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #ffed02;
`;

const DescriptionScreen = ({ navigation }) => (
  <StyledView>
    <Text>Description Screen</Text>
  </StyledView>
);

export default DescriptionScreen;
