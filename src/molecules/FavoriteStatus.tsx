import React from "react";
import { Pressable, StyleProp, View, ViewStyle } from "react-native";

import { Icon } from "../atoms/Icon";

export interface FavoriteStatusPropsType {
  onToggle: (isFavorite: boolean) => void;
  isFavorite: boolean;
  containerStyle?: StyleProp<ViewStyle>;
}

export const FavoriteStatus: React.FC<FavoriteStatusPropsType> = ({
  onToggle,
  isFavorite = false,
  containerStyle = {},
}) => {
  const iconName = isFavorite ? "favoriteFilled" : "favorite";
  const iconColor = isFavorite ? "heart" : "primary";

  const handleOnPress = () => onToggle(!isFavorite);

  return (
    <View style={containerStyle}>
      <Pressable onPress={handleOnPress}>
        <Icon size="s" name={iconName} color={iconColor} />
      </Pressable>
    </View>
  );
};
