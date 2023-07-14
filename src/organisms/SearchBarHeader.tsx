import React from "react";
import { StyleSheet, View, ViewProps } from "react-native";
import { IconButton, SearchBar } from "../molecules";

export interface SearchBarHeaderPropsType extends ViewProps {
  onPressCart: () => void;
  onSearchEnter: (searchTerm: string) => void;
}

export const SearchBarHeader: React.FC<SearchBarHeaderPropsType> = ({
  onPressCart,
  onSearchEnter,
  ...rest
}) => {
  return (
    <View style={[styles.container, rest.style]} {...rest}>
      <SearchBar onSearchEnter={onSearchEnter} />
      <IconButton
        name="cart"
        size="s"
        color="primary"
        onPress={onPressCart}
        containerStyle={{ marginLeft: 8 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
