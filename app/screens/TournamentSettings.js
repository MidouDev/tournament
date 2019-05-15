import React from 'react';
import styled from 'styled-components';

const StyledView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #ffed02;
  padding: 30px 10px;
`;

const TitleText = styled.Text`
  font-size: 30;
  text-align: center;
  font-weight: bold;
  color: black;
  padding: 30px 0;
`;

const TournamentSettings = ({ navigation }) => {
    const mode = navigation.getParam('mode','single');

    return(
        <StyledView><TitleText>{mode === 'single' ? 'Single Mode' : 'Multiplayer Mode'}</TitleText></StyledView>
    )
}

export default TournamentSettings;