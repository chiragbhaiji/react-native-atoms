import React from "react";
import { TextProps, Text } from "react-native";
import { textTypes } from "../constants";

export interface LabelPropsType extends TextProps {
  value: string;
  type: keyof typeof textTypes;
}

const Label: React.FC<LabelPropsType> = ({ value, type, ...rest }) => {
  const { style, ...restExcludingStyle } = rest;

  return (
    <Text style={[textTypes[type], style]} {...restExcludingStyle}>
      {value}
    </Text>
  );
};

export { Label };
