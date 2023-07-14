export const theme = {
  colors: {
    font: {
      primary: "black",
      secondary: "grey",
      heart: "red",
    },
    button: {
      primary: "black",
      secondary: "grey",
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
    color: theme.colors.font.primary,
  },
  h2: {
    fontSize: 24,
    color: theme.colors.font.primary,
  },
  h3: {
    fontSize: 18,
    color: theme.colors.font.primary,
  },
  l1: {
    fontSize: 16,
    color: theme.colors.font.primary,
  },
  l2: {
    fontSize: 12,
    color: theme.colors.font.secondary,
  },
  l3: {
    fontSize: 8,
    color: theme.colors.font.secondary,
  },
};
