import React from "react";
import { Pressable, Text, PressableProps } from "react-native";

import { textTypes, theme } from "../constants";
import { Label } from "./Label";

const buttonColors = theme.colors.button;

export interface ButtonPropsType extends PressableProps {
  label: string;
  type?: keyof typeof buttonColors;
  labelType?: keyof typeof textTypes;
}

export const Button: React.FC<ButtonPropsType> = ({
  label,
  type = "primary",
  labelType = "l1",
  ...rest
}) => {
  const { style, ...remainingFromProps } = rest;
  const finalStyle = { backgroundColor: buttonColors[type], style };

  return (
    <Pressable style={finalStyle} {...remainingFromProps}>
      <Label value={label} type={labelType} />
    </Pressable>
  );
};
