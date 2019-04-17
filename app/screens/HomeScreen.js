import React, { useState, useEffect } from "react";
import { Text, Button } from "react-native";
import styled from "styled-components";

const StyledView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #ffed02;
`;

const HomeScreen = ({ navigation }) => {
  const [count, setCount] = useState(0);
  const _increaseCount = () => {
    setCount(count + 1);
  };
  
  useEffect(() => {
    () => navigation.setParams({ increaseCount: _increaseCount });
  });

  return (
    <StyledView>
      <Text>Home Screen</Text>
      <Button
        title="Go to Description"
        onPress={() => navigation.navigate("Description")}
      />
      <Text>{count}</Text>
    </StyledView>
  );
};

export default HomeScreen;
