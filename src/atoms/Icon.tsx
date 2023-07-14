import React from "react";
import { Image } from "react-native";

import { theme, iconNames, iconSizes } from "../constants";

const buttonColors = theme.colors.button;

export interface IconPropsType {
  name: keyof typeof iconNames;
  size: keyof typeof iconSizes;
  color: keyof typeof buttonColors | undefined;
}

export const Icon: React.FC<IconPropsType> = ({
  name,
  size,
  color = undefined,
}) => {
  const { width, height } = iconSizes[size];
  const tintColor = color && buttonColors[color];

  return (
    <Image source={iconNames[name]} style={{ width, height, tintColor }} />
  );
};
