import { MouseEvent, ReactNode } from "react";
import Link from "next/link";
import classNames from "classnames";
import { getButtonAnimationClass, getButtonClass, getButtonSizeClass } from "@/utils/styling";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export type ButtonProps = {
  href?: string;
  copy: ReactNode;
  style: Types.ButtonStyles;
  size?: Types.ButtonSize;
  rounded?: boolean;
  className?: string;
  onClick?: (e?: MouseEvent<HTMLButtonElement>) => void;
  disable?: boolean;
  animationType?: Types.AnimationType;
};

export const Button = ({
  href,
  copy,
  style,
  size = "regular",
  rounded = false,
  className,
  onClick,
  disable = false,
  animationType,
}: ButtonProps) => {
  const buttonStyle = classNames(
    "btn",
    rounded && "rounded-full",
    className,
    animationType ? getButtonAnimationClass(style, animationType) : getButtonClass(style),
    getButtonSizeClass(size),
    {
      "btn-disabled": disable,
    }
  );

  const buttonContent = () => (
    <>
      {copy}
      {style === "link" && <FontAwesomeIcon icon={faArrowRight} color="" size="2xl" className="mx-2" />}
    </>
  );

  return href ? (
    <Link role="button" href={href} target={href.startsWith("http") ? "_blank" : "_self"} className={buttonStyle}>
      {buttonContent()}
    </Link>
  ) : (
    <button onClick={onClick} className={buttonStyle}>
      {buttonContent()}
    </button>
  );
};
