import React from "react";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";

import { Button, Label } from "../atoms";

export interface ListHeaderPropsType {
  label: string;
  actionLabel?: string;
  containerStyle?: StyleProp<ViewStyle>;
  onPressActionLabel?: () => void;
}

export const ListHeader: React.FC<ListHeaderPropsType> = ({
  label,
  actionLabel,
  onPressActionLabel = () => {},
  containerStyle = {},
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Label value={label} type="h3" />
      {!!actionLabel && (
        <Button
          type="text"
          labelType="actionLabel2"
          label={actionLabel}
          onPress={onPressActionLabel}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    paddingTop: 16,
    paddingBottom: 8,
  },
});
