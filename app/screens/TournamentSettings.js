import React, { useState } from "react";
import styled from "styled-components";
import { Picker, Text } from "react-native";

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

const SettingContainer = styled.View``;

const PickerView = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const TournamentSettings = ({ navigation }) => {
  const mode = navigation.getParam("mode", "single");
  const [nbrPlayers, setNbrPlayers] = useState(4);

  return (
    <StyledView>
      <TitleText>
        {mode === "single" ? "Single Mode" : "Multiplayer Mode"}
      </TitleText>
      <SettingContainer>
        <PickerView>
          <Text>Players :</Text>
          <Picker
            selectedValue={nbrPlayers}
            style={{ height: 50, width: 100 }}
            onValueChange={(nbr, index) => setNbrPlayers(nbr)}
          >
            <Picker.Item label="4" value="4" />
            <Picker.Item label="8" value="8" />
            <Picker.Item label="16" value="16" />
          </Picker>
        </PickerView>
      </SettingContainer>
    </StyledView>
  );
};

export default TournamentSettings;
