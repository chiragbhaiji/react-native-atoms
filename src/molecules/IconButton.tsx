import React from "react";
import { Pressable } from "react-native";

import { Icon, IconPropsType } from "../atoms/Icon";

export interface IconButtonPropsType extends IconPropsType {
  onPress: () => void;
}

export const IconButton: React.FC<IconButtonPropsType> = ({
  onPress,
  ...rest
}) => {
  return (
    <Pressable onPress={onPress}>
      <Icon {...rest} />
    </Pressable>
  );
};
