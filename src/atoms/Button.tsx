import React from "react";
import { Pressable, Text, PressableProps } from "react-native";

import { colors } from "../constants";

export interface ButtonPropsType extends PressableProps {
  label: string;
  labelColor: keyof typeof colors;
}

export const Button: React.FC<ButtonPropsType> = ({
  label,
  labelColor,
  ...rest
}) => (
  <Pressable {...rest}>
    <Text style={{ color: colors[labelColor] }}>{label}</Text>
  </Pressable>
);
