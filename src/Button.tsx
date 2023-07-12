import React from "react";
import { Pressable, Text, PressableProps } from "react-native";

const colors = {
  primary: "red",
  secondary: "yellow",
};

interface ButtonPropsType extends PressableProps {
  label: string;
  labelColor: keyof typeof colors;
}

const Button: React.FC<ButtonPropsType> = ({ label, labelColor, ...rest }) => (
  <Pressable
    style={{
      flex: 1,
      backgroundColor: "red",
      alignItems: "center",
      justifyContent: "center",
    }}
    {...rest}
  >
    <Text style={{ padding: 20, color: colors[labelColor] }}>{label}</Text>
  </Pressable>
);

export { Button, ButtonPropsType };
