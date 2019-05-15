import styled from "styled-components";

export const StyledView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #ffed02;
  padding: 30px 10px;
`;

export const TitleText = styled.Text`
  font-size: 30;
  text-align: center;
  font-weight: bold;
  color: black;
  padding: 30px 0;
`;

export const Button = styled.TouchableOpacity`
  background-color: ${props => props.primary ? '#004d98' : '#a50044'};
  width: 40%;
  margin: 0px 5px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
`

export const OptionsView = styled.View`
  flex-direction: row;
  height: 35%;
  margin: 20px 0px;
`

export const ButtonText = styled.Text`
  color: #edbb00;
  font-size: 50
`;