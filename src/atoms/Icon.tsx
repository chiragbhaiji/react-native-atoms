import React from "react";
import { Image } from "react-native";

import { theme, iconNames, iconSizes } from "../constants";

const colorsOptions = theme.colors.font;

export interface IconPropsType {
  name: keyof typeof iconNames;
  size?: keyof typeof iconSizes;
  color?: keyof typeof colorsOptions | undefined;
}

export const Icon: React.FC<IconPropsType> = ({
  name,
  size = "s",
  color = "primary",
}) => {
  const { width, height } = iconSizes[size];
  const tintColor = color && colorsOptions[color];

  return (
    <Image source={iconNames[name]} style={{ width, height, tintColor }} />
  );
};
