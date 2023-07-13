import React from "react";
import { Pressable, Text } from "react-native";
import { colors } from "../constants";
import { ButtonPropsType } from "../types/ButtonPropsType";

const Button: React.FC<ButtonPropsType> = ({ label, labelColor, ...rest }) => (
  <Pressable {...rest}>
    <Text style={{ color: colors[labelColor] }}>{label}</Text>
  </Pressable>
);

export { Button, ButtonPropsType };
