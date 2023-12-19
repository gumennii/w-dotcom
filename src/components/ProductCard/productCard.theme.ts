import theme from "tailwindcss/defaultTheme";

export const product = {
  ".card figure": {
    "display": "block",
    "width": "100%",
    "border-radius": theme.borderRadius["2xl"],
  },
  ".product.card-bordered": {
    "border-color": "#6B6B6B"
  },
  ".product.card-bordered figure": {
    "border-bottom-left-radius": "inherit",
    "border-bottom-right-radius": "inherit",
  },
};
