import React from "react";
import { TextInputProps, StyleSheet, TextInput } from "react-native";

const Input: React.FC<TextInputProps> = ({ ...rest }) => (
  <TextInput style={[styles.input, rest.style]} {...rest} />
);

const styles = StyleSheet.create({
  input: {
    flex: 1,
    padding: 8,
  },
});

export { Input };
