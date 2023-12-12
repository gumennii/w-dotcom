import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import daisyui from "daisyui";

export default {
  plugins: [daisyui],
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: { /* your theme name */
          primary: '#081121', /* Primary color */
          'primary-focus': '#1a3d68', /* Primary color - focused */
          'primary-content': '#ffffff', /* Foreground content color to use on primary color */

          secondary: '#EC612A', /* Secondary color */
          'secondary-focus': '#f8fafc', /* Secondary color - focused */
          'secondary-content': '#001729', /* Foreground content color to use on secondary color */

          accent: '#f26726', /* Accent color */
          'accent-focus': '#ff844b', /* Accent color - focused */
          'accent-content': '#ffffff', /* Foreground content color to use on accent color */

          neutral: '#3d4451', /* Neutral color */
          'neutral-focus': '#2a2e37', /* Neutral color - focused */
          'neutral-content': '#ffffff', /* Foreground content color to use on neutral color */

          'base-100': '#ffffff', /* Base color of page, used for blank backgrounds */
          'base-200': '#f9fafb', /* Base color, a little darker */
          'base-300': '#d1d5db', /* Base color, even more darker */
          'base-content': '#1f2937', /* Foreground content color to use on base color */

          info: '#3d7eeb', /* Info */
          success: '#09cc60', /* Success */
          warning: '#f7ac0d', /* Warning */
          error: '#d61f1f', /* Error */
        },
      },
    ],
  },
} satisfies Config;
