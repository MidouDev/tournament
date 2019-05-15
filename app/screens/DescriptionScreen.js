import React from "react";
import styled from "styled-components";

const StyledView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 30px 20px;
  background-color: #ffed02;
`;

const DescriptionText = styled.Text`
  font-size: 20;
`

const DescriptionScreen = ({ navigation }) => (
  <StyledView>
    <DescriptionText>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </DescriptionText>
  </StyledView>
);

export default DescriptionScreen;
