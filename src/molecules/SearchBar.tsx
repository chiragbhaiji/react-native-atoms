import React, { useState } from "react";
import { StyleSheet, View, ViewProps } from "react-native";
import { Icon, Input } from "../atoms";

export const SearchBar: React.FC<ViewProps> = ({ ...rest }) => {
  const [value, setValue] = useState<string>("");

  const handleOnChangeText = (text: string) => {
    setValue(text);
  };

  return (
    <View style={[styles.container, rest.style]} {...rest}>
      <Icon name="search" size="s" color="secondary" />
      <Input
        placeholder="Search"
        value={value}
        onChangeText={handleOnChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "lightgrey",
    borderWidth: 1,
    borderRadius: 8,
    padding: 4,
  },
});
