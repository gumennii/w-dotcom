import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

import daisyui from "daisyui";

export default {
  plugins: [daisyui],
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", ...fontFamily.sans],
      },
    },
  },
  daisyui: {
    themes: [
      {
        dotcom: {
          primary: "#081121" /* Primary color */,
          "primary-focus": "#081D3C" /* Primary color - focused */,
          "primary-content":
            "#ffffff" /* Foreground content color to use on primary color */,

          secondary: "#EC612A" /* Secondary color */,
          "secondary-focus": "#CB4013" /* Secondary color - focused */,
          "secondary-content":
            "#ffffff" /* Foreground content color to use on secondary color */,

          accent: "#24A840" /* Accent color */,
          "accent-focus": "#058921" /* Accent color - focused */,
          "accent-content":
            "#ffffff" /* Foreground content color to use on accent color */,

          // neutral: "#3d4451" /* Neutral color */,
          // "neutral-focus": "#2a2e37" /* Neutral color - focused */,
          // "neutral-content":
          //   "#ffffff" /* Foreground content color to use on neutral color */,

          // "base-100":
          //   "#ffffff" /* Base color of page, used for blank backgrounds */,
          // "base-200": "#f9fafb" /* Base color, a little darker */,
          // "base-300": "#d1d5db" /* Base color, even more darker */,
          // "base-content":
          //   "#1f2937" /* Foreground content color to use on base color */,

          info: "#3d7eeb" /* Info */,
          success: "#09cc60" /* Success */,
          warning: "#f7ac0d" /* Warning */,
          error: "#d61f1f" /* Error */,

          "--rounded-btn": ".5rem",
          ".btn": {
            "text-transform": "uppercase",
          },
          ".btn-primary": {
            "background-color": "#081D3C",
            "text-transform": "capitalize",
          },
          ".btn-primary:hover": {
            "background-color": "#081121",
          },
          ".btn-secondary": {
            "border-radius": "2rem",
          },
          ".btn-outline": {
            "border-radius": "2.5rem",
          },
          ".btn-outline:hover": {
            "background-color": "#081d3c33",
            "color": "#081121",
          },

          // We can add another font to the component by simply setting the property
          // fontFamily: "Inter",
        },
      },
    ],
  },
} satisfies Config;
