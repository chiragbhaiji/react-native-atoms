import React, { useState } from "react";
import {
  Keyboard,
  NativeSyntheticEvent,
  StyleSheet,
  TextInputKeyPressEventData,
  TextInputSubmitEditingEventData,
  View,
  ViewProps,
} from "react-native";
import { Icon, Input } from "../atoms";

export interface SearchBarPropsType extends ViewProps {
  onSearchEnter: (searchTerm: string) => void;
}

export const SearchBar: React.FC<SearchBarPropsType> = ({
  onSearchEnter,
  ...rest
}) => {
  const [value, setValue] = useState<string>("");

  const handleOnChangeText = (text: string) => {
    setValue(text);
  };

  const triggerOnSearch = (text: string) => {
    Keyboard.dismiss();
    onSearchEnter(text);
  };

  const handleOnKeyPress = (
    e: NativeSyntheticEvent<TextInputKeyPressEventData>
  ) => {
    const { nativeEvent } = e;
    if (nativeEvent.key == "Enter") {
      triggerOnSearch(value);
    }
  };

  const handleOnSubmitEditing = (
    e: NativeSyntheticEvent<TextInputSubmitEditingEventData>
  ) => {
    const { text } = e.nativeEvent;
    triggerOnSearch(text);
  };

  return (
    <View style={[styles.container, rest.style]} {...rest}>
      <Icon name="search" size="s" color="secondary" />
      <Input
        value={value}
        placeholder="Search"
        returnKeyType="search"
        clearButtonMode="while-editing"
        onKeyPress={handleOnKeyPress}
        onChangeText={handleOnChangeText}
        onSubmitEditing={handleOnSubmitEditing}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "lightgrey",
    borderWidth: 1,
    borderRadius: 8,
    padding: 4,
  },
});
