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

          neutral: "#101010" /* Neutral color */,
          "neutral-focus": "#61636B" /* Neutral color - focused */,
          "neutral-content":
            "#ffffff" /* Foreground content color to use on neutral color */,

          "base-100":
            "#ffffff" /* Base color of page, used for blank backgrounds */,
          "base-200": "#6B6B6B" /* Base color, a little darker */,
          // "base-300": "#d1d5db" /* Base color, even more darker */,
          // "base-content":
          //   "#1f2937" /* Foreground content color to use on base color */,

          info: "#012F85" /* Info */,
          success: "#24A840" /* Success */,
          warning: "#FFB144" /* Warning */,
          error: "#DC4130" /* Error */,

          "--rounded-btn": ".5rem",

          ".btn": {
            "text-transform": "uppercase",
          },
          ".btn-primary": {
            "text-transform": "capitalize",
          },
          ".btn[disabled]": {
            "color": "#ffffff",
          },
          ".btn-primary[disabled]": {
            "background-color": "#6B6B6B",
          },
          ".btn-secondary": {
            "border-radius": "2rem",
          },
          ".btn-secondary[disabled]": {
            "background-color": "#ec612ab3",
          },
          ".btn-outline": {
            "border-radius": "2.5rem",
          },
          ".btn-outline:hover": {
            "background-color": "#081d3c33",
            "color": "#081121",
          },
          ".btn-outline[disabled]": {
            "color": "#6B6B6B",
            "border": "1px solid #6B6B6B",
            "background-color": "transparent",
          },
          ".btn-accent[disabled]": {
            "background-color": "#24a840b3",
          },
          ".btn-icon": {
            "border-radius": "100%",
            "padding": ".5rem",
            "height": "auto"
          },
          ".btn-outline.btn-icon svg path": {
            "stroke": "#081121",
          }
          // We can add another font to the component by simply setting the property
          // fontFamily: "Inter",
        },
      },
    ],
  },
} satisfies Config;
