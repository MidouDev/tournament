import styled from "styled-components";

export const HomeViewContainer = styled.View`
  background-color: #ffed02;
  flex: 1;
  padding: 50px 5px;
  align-items: center;
  justify-content: space-around
`;

export const OptionsView = styled.View`
  align-items: center;
  justify-content: center;
`;

export const WelcomeView = styled(OptionsView)`
`;

export const WelcomeText = styled.Text`
  font-size: 55;
  text-align: center;
  font-weight: bold;
  color: #004d98;
  font-family : tahoma;
`;

export const Button = styled.TouchableOpacity`
  alignItems: center;
  backgroundColor: ${props => props.disabled ? 'grey' : '#a50044'};
  padding: 10px;
  width: 200;
  border-radius: 5;
  margin: 5px;
  opacity: ${props => props.disabled ? 0.6 : 1};
`;

export const ButtonText = styled.Text`
  font-size: 25;
  font-weight: bold;
  color: #edbb00;
  text-align:center;
`;

export const SpecialButton = styled(Button)`
  backgroundColor: #004d98;
`
