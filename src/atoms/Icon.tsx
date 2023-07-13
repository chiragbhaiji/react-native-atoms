import React from "react";
import { Image } from "react-native";

import { colors, iconNames, iconSizes } from "../constants";

export interface IconPropsType {
  name: keyof typeof iconNames;
  size: keyof typeof iconSizes;
  color: keyof typeof colors | undefined;
}

export const Icon: React.FC<IconPropsType> = ({
  name,
  size,
  color = undefined,
}) => {
  const { width, height } = iconSizes[size];
  const tintColor = color && colors[color];

  return (
    <Image source={iconNames[name]} style={{ width, height, tintColor }} />
  );
};
