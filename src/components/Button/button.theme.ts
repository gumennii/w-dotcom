import theme from "tailwindcss/defaultTheme";
import { colors } from "~/styles/theme/colors.theme";

export const button = {
  "--rounded-btn": theme.spacing["0.5"],

  ".btn": {
    "text-transform": "uppercase",
  },
  ".btn-primary": {
    "text-transform": "capitalize",
  },
  ".btn[disabled]": {
    color: colors["base-100"],
  },
  ".btn-primary[disabled]": {
    "background-color": colors["base-200"],
  },
  ".btn-secondary": {
    "border-radius": theme.borderRadius.full,
  },
  ".btn-secondary[disabled]": {
    "background-color": "#ec612ab3", // [!] color with opacity
  },
  ".btn-outline": {
    "border-radius": theme.borderRadius.full,
  },
  ".btn-outline:hover": {
    "background-color": "#081d3c33", // [!] color with opacity
    color: colors.primary,
  },
  ".btn-outline[disabled]": {
    color: colors["base-200"],
    border: `1px solid ${colors["base-200"]}`,
  },
  ".btn-accent[disabled]": {
    "background-color": "#24a840b3", // [!] color with opacity
  },
  ".btn-icon": {
    "border-radius": theme.borderRadius.full,
    padding: theme.spacing["0.5"],
    height: "auto",
  },
  ".btn-outline.btn-icon svg path": {
    stroke: colors.primary,
  },
};
