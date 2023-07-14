export const theme = {
  colors: {
    font: {
      primary: "black",
      secondary: "lightgrey",
      heart: "red",
      star: "orange",
      action: "green",
    },
    button: {
      primary: "black",
      secondary: "grey",
      text: "transparent",
    },
  },
};

export const iconNames = {
  cart: require("./assets/icons/cart/cart.png"),
  search: require("./assets/icons/search/search.png"),
  favorite: require("./assets/icons/favorite/favorite.png"),
  starFilled: require("./assets/icons/star-filled/star-filled.png"),
  favoriteFilled: require("./assets/icons/favorite-filled/favorite-filled.png"),
};

export const iconSizes = {
  s: {
    width: 24,
    height: 24,
  },
  m: {
    width: 32,
    height: 32,
  },
  l: {
    width: 44,
    height: 44,
  },
};

export const textTypes = {
  h1: {
    fontSize: 30,
    lineHeight: 36,
    color: theme.colors.font.primary,
  },
  h2: {
    fontSize: 24,
    lineHeight: 30,
    color: theme.colors.font.primary,
  },
  h3: {
    fontSize: 18,
    lineHeight: 24,
    color: theme.colors.font.primary,
  },
  l1: {
    fontSize: 16,
    lineHeight: 18,
    color: theme.colors.font.primary,
  },
  l2: {
    fontSize: 12,
    lineHeight: 14,
    color: theme.colors.font.secondary,
  },
  l3: {
    fontSize: 8,
    lineHeight: 10,
    color: theme.colors.font.secondary,
  },
  actionLabel1: {
    fontSize: 16,
    lineHeight: 18,
    color: theme.colors.font.action,
  },
  actionLabel2: {
    fontSize: 12,
    lineHeight: 14,
    color: theme.colors.font.action,
  },
};
