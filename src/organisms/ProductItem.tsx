import React from "react";
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  View,
  ViewProps,
} from "react-native";
import {
  FavoriteStatus,
  FavoriteStatusPropsType,
} from "../molecules/FavoriteStatus";
import { Label } from "../atoms";
import {
  RatingWithReviewsCount,
  RatingWithReviewsCountPropsType,
} from "../molecules/RatingWithReviewsCount";

export interface ProductItemPropsType extends ViewProps {
  category: string;
  title: string;
  price: string;
  reviewInfo: RatingWithReviewsCountPropsType;
  favoriteProps: FavoriteStatusPropsType;
  imgSrc: ImageSourcePropType;
}

export const ProductItem: React.FC<ProductItemPropsType> = ({
  category,
  title,
  price,
  imgSrc,
  reviewInfo,
  favoriteProps,
  ...rest
}) => {
  const { isFavorite, onToggle } = favoriteProps;
  const { reviewsCount, ratingValue } = reviewInfo;

  return (
    <View {...rest}>
      <View style={styles.imgContainer}>
        <Image source={imgSrc} style={styles.img} />
        <FavoriteStatus
          isFavorite={isFavorite}
          onToggle={onToggle}
          containerStyle={styles.favorite}
        />
      </View>
      <View style={styles.contentContainer}>
        <Label value={category} type="l2" />
        <Label value={title} type="l1" style={{ marginTop: 4 }} />
        <View style={styles.rowContainer}>
          <RatingWithReviewsCount
            ratingValue={ratingValue}
            reviewsCount={reviewsCount}
          />
          <Label value={price} type="actionLabel1" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imgContainer: {},
  contentContainer: {
    backgroundColor: "white",
    padding: 8,
  },
  rowContainer: {
    marginTop: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  img: {
    aspectRatio: 1.8,
    width: "100%",
    backgroundColor: "lightgrey",
  },
  favorite: {
    position: "absolute",
    right: 8,
    top: 8,
  },
});
