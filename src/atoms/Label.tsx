import React from "react";
import { TextProps, StyleSheet, Text } from "react-native";
import { textTypes } from "../constants";

export interface LabelPropsType extends TextProps {
  value: string;
  type: keyof typeof textTypes;
}

const Label: React.FC<LabelPropsType> = ({ value, type, ...rest }) => (
  <Text style={[styles.text, textTypes[type], rest.style]} {...rest}>
    {value}
  </Text>
);

const styles = StyleSheet.create({
  text: {
    flex: 1,
    padding: 8,
  },
});

export { Label };
