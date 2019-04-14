import React, {Component} from 'react';
import {Platform} from 'react-native';
import styled from 'styled-components/native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  render() {
    return (
      <Container>
        <WelcomeText>Welcome to xHub's billiards tournaments platform !</WelcomeText>
        <InstructionText>To create a new tournament choose one of the following options :</InstructionText>
        <InstructionText>{instructions}</InstructionText>
      </Container>
    );
  }
}

const Container = styled.View`
  flex: 1;
  justify-content: center;
  //align-items: center;
  background-color: #ffe4c4;
`

const WelcomeText = styled.Text`
  font-size: 20;
  text-align: center;
  margin-top: 10;
  margin-bottom: 10;
  margin-left: 10;
  margin-right: 10;
  width: 70%;
`
const InstructionText = styled.Text`
  text-align: center;
  color: #333333;
  margin-bottom: 5;
  width: 85%;
`

