import React from 'react';
import styled from 'styled-components/native';

export default App = () => (
  <Container>
    <WelcomeContainer>
      <WelcomeText>Billiards tournaments platform</WelcomeText>   
    </WelcomeContainer>
    <InstructionText>To create a new tournament choose one of the following options :</InstructionText>
  </Container>
);


const Container = styled.View`
  flex: 1;
  /*justify-content: center;*/
  align-items: center;
  background-color: #f2cd5d;
  padding: 10px;
`
const WelcomeContainer = styled.View`
  height: 25%;
  justify-content: center;
  align-items: center;
`

const WelcomeText = styled.Text`
  font-size: 30;
  color: #d741a7;
  text-align: center;
`
const InstructionText = styled.Text`
  text-align: center;
  color: #333333;
  margin-bottom: 5;
  width: 85%;
  font-size: 15;
  color: #3A1772;
`

