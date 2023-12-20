import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

import { button } from "./src/components/Button/button.theme";
import { colors } from "./src/styles/theme/colors.theme";

import daisyui from "daisyui";

export default {
  plugins: [daisyui],
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", ...fontFamily.sans],
      },
      colors: {
        'primary': colors.primary,
        'secondary': colors.secondary,
        'focus-btn': colors["primary-focus"],
        'focus-text': colors["neutral-focus"],
      },
    },
  },
  daisyui: {
    themes: [
      {
        dotcom: {
          ...colors,
          // ...button,

          "--rounded-btn": ".5rem",
          // We can add another font to the component by simply setting the property
          // fontFamily: "Inter",
        },
      },
    ],
  },
} satisfies Config;
