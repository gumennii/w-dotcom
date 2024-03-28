import { FC } from "react";

type PlayButtonProps = {
  onClick: () => void;
};

export const PlayButton: FC<PlayButtonProps> = ({ onClick }) => (
  <button
    className="absolute left-1/2 top-1/2 w-1/12 -translate-x-1/2 -translate-y-1/2 transition hover:scale-90"
    type="button"
    aria-label="Play Video"
    onClick={onClick}
  >
    <svg className="h-full w-full" width="84" height="84" viewBox="0 0 84 84" fill="none">
      <path
        d="M82.4102 41.7803C82.4102 63.8717 64.5015 81.7803 42.4102 81.7803C20.3188 81.7803 2.41016 63.8717 2.41016 41.7803C2.41016 19.6889 20.3188 1.78027 42.4102 1.78027C64.5015 1.78027 82.4102 19.6889 82.4102 41.7803Z"
        stroke="white"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M59.7877 40.3233C60.9307 40.9583 60.9307 42.6022 59.7877 43.2372L34.8862 57.0713C33.7753 57.6885 32.4102 56.8852 32.4102 55.6144V27.9461C32.4102 26.6753 33.7753 25.872 34.8862 26.4892L59.7877 40.3233Z"
        stroke="white"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </button>
);
