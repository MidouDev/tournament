import React from 'react';
import { Text, Button } from 'react-native';
import styled from 'styled-components';

const StyledView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const HomeScreen = ({ navigation }) => (
  <StyledView>
    <Text>Home Screen</Text>
    <Button title="Go to Details" onPress={() => navigation.navigate('Description')} />
  </StyledView>
);

export default HomeScreen;
