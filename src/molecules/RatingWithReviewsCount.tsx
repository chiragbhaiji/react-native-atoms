import React from "react";
import { StyleSheet, View } from "react-native";

import { Icon, Label } from "../atoms";

export interface RatingWithReviewsCountPropsType {
  ratingValue: number;
  reviewsCount: number;
}

export const RatingWithReviewsCount: React.FC<
  RatingWithReviewsCountPropsType
> = ({ ratingValue, reviewsCount }) => {
  const labelText = `${ratingValue} | ${reviewsCount}`;

  return (
    <View style={styles.container}>
      <Icon name="starFilled" color="star" />
      <Label value={labelText} type="l2" style={{ marginLeft: 4 }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 4,
  },
});
