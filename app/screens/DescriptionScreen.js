import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components';

const StyledView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const DescriptionScreen = () => (
  <StyledView>
    <Text>Description Screen</Text>
  </StyledView>
);

export default DescriptionScreen;
