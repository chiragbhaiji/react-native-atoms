import React from "react";
import { Pressable, StyleProp, View, ViewStyle } from "react-native";

import { Icon, IconPropsType } from "../atoms/Icon";

export interface IconButtonPropsType extends IconPropsType {
  containerStyle?: StyleProp<ViewStyle>;
  onPress: () => void;
}

export const IconButton: React.FC<IconButtonPropsType> = ({
  onPress,
  containerStyle = {},
  ...rest
}) => {
  return (
    <View style={containerStyle}>
      <Pressable onPress={onPress}>
        <Icon {...rest} />
      </Pressable>
    </View>
  );
};
