import { IS_BROWSER } from "$fresh/runtime.ts";
import { apply, Configuration, setup } from "twind";
export * from "twind";
export { css } from "twind/css";
export const config: Configuration = {
  darkMode: "class",
  mode: "silent",
  theme: {
    fontFamily: {
      mono: [
        "Menlo",
        "Monaco",
        '"Lucida Console"',
        "Consolas",
        '"Liberation Mono"',
        '"Courier New"',
        "monospace",
      ],
    },
    extend: {
      lineHeight: {
        0: "0",
      },
      /*fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },*/
      width: {
        72: "18rem",
      },
      animation: {
        move: "move 6s linear infinite",
      },
    },
  },
  plugins: {
    link: apply
      `text-blue-500 transition duration-75 ease-in-out hover:text-blue-400`,
  },
};

if (IS_BROWSER) setup(config);
