import React from "react";
import { TextProps, Text } from "react-native";
import { textTypes } from "../constants";

export interface LabelPropsType extends TextProps {
  value: string;
  type: keyof typeof textTypes;
}

const Label: React.FC<LabelPropsType> = ({ value, type, ...rest }) => (
  <Text style={[textTypes[type], rest.style]} {...rest}>
    {value}
  </Text>
);

export { Label };
