import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";
import { colors } from "./src/styles/theme/colors";
import { buttons } from "./src/styles/theme/buttons";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", ...fontFamily.sans],
        roboto: ["Roboto Condensed", "sans-serif"],
      },
      width: {
        "screen-xl": "1440px",
      },
      maxWidth: {
        "screen-lg": "1312px",
      },
      blur: {
        xs: "2px",
      },
      colors: {
        primary: "#081121",
        secondary: "#EC612A",
        accent: "#24A840",
      },
      fontSize: {
        sx: "0.937rem",
        sm: "1rem",
        base: "1.067rem",
        lg: "1.215rem",
        xl: "1.575rem",
        "2xl": "1.793rem",
        "3xl": "2.041rem",
        "4xl": "2.479rem",
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [typography, require("daisyui")],
  daisyui: {
    styled: true,
    base: true,
    utils: true,
    logs: false,
    rtl: false,
    themes: [
      {
        dotcom: {
          ...colors,
          ...buttons,
          // ...require("./src/styles/theme/colors"),
          // ...require("./src/styles/theme/button"),

          "--rounded-btn": ".5rem",
          // We can add another font to the component by simply setting the property
          // fontFamily: "Inter",
        },
      },
    ],
  },
} satisfies Config;
