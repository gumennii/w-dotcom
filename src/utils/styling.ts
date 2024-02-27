export enum BackgroundTypes {
  Light = "Light",
  Dark = "Dark",
  Medium = "Medium",
  Transparent = "Transparent",
  Secondary = "Secondary",
}

export enum PaddingSize {
  Small = "Small",
  Medium = "Medium",
  Large = "Large",
  None = "None",
}

export enum MaxWidth {
  Full = "Full",
  Large = "Large",
  Medium = "Medium",
  Small = "Small",
  None = "None",
}

export const getBackgroundClass = (background?: BackgroundTypes) => {
  switch (background) {
    case BackgroundTypes.Transparent:
      return "bg-transparent text-primary";
    case BackgroundTypes.Light:
      return "bg-base-100 text-primary";
    case BackgroundTypes.Medium:
      return "bg-gray-50 text-primary";
    case BackgroundTypes.Dark:
      return "bg-base-300 !text-secondary";
    case BackgroundTypes.Secondary:
      return "bg-secondary !text-white";
    default:
      return "";
  }
};

export const getPaddingTopClass = (padding?: PaddingSize) => {
  switch (padding) {
    case PaddingSize.Large:
      return "pt-16 md:pt-28";
    case PaddingSize.Medium:
      return "pt-10 lg:pt-20";
    case PaddingSize.Small:
      return "pt-6 lg:pt-8";
    case PaddingSize.None:
      return "";
    default:
      return "";
  }
};

export const getPaddingBottomClass = (padding?: PaddingSize) => {
  switch (padding) {
    case PaddingSize.Large:
      return "pb-16 md:pb-28";
    case PaddingSize.Medium:
      return "pb-10 lg:pb-20";
    case PaddingSize.Small:
      return "pb-6 lg:pb-8";
    case PaddingSize.None:
      return "";
    default:
      return "";
  }
};

export const getMarginTopClass = (padding?: PaddingSize) => {
  switch (padding) {
    case PaddingSize.Large:
      return "mt-16 md:mt-28";
    case PaddingSize.Medium:
      return "mt-10 lg:mt-20";
    case PaddingSize.Small:
      return "mt-6 lg:mt-8";
    case PaddingSize.None:
      return "";
    default:
      return "";
  }
};

export const getMarginBottomClass = (padding?: PaddingSize) => {
  switch (padding) {
    case PaddingSize.Large:
      return "mb-16 md:mb-28";
    case PaddingSize.Medium:
      return "mb-10 lg:mb-20";
    case PaddingSize.Small:
      return "mb-6 lg:mb-8";
    case PaddingSize.None:
      return "";
    default:
      return "";
  }
};

export const getMaxWidth = (width?: MaxWidth) => {
  switch (width) {
    case MaxWidth.Small:
      return "m-auto max-w-4xl";
    case MaxWidth.Medium:
      return "m-auto max-w-screen-xl";
    case MaxWidth.Large:
      return "m-auto max-w-screen-2xl";
    case MaxWidth.Full:
      return "max-w-full";
    case MaxWidth.None:
      return "";
    default:
      return "";
  }
};

export const getButtonClass = (style?: Types.ButtonStyles) => {
  switch (style) {
    case "primary":
      return "btn-primary text-white normal-case";
    case "secondary":
      return "btn-secondary text-white";
    case "accent":
      return "btn-accent";
    case "ghost":
      return "btn-ghost";
    case "link":
      return "btn-link";
    case "outline":
      return "btn-outline text-primary border-primary";
    default:
      return "btn-primary";
  }
};

const getDynamicAnimationClass = (style?: Types.ButtonStyles) => {
  const animationBaseClass = `border-none transition-all duration-[0.3s] relative before:content-[''] before:absolute before:w-full before:h-full before:z-[1] before:opacity-0 before:transition-all before:duration-[0.3s] before:border-t before:border-b before:scale-x-[0.1] before:scale-y-100 before:left-0 before:bottom-0 hover:before:opacity-100 hover:before:scale-100 after:content-[''] after:absolute after:w-full after:h-full after:z-[1] after:transition-all after:duration-[0.3s] after:left-0 after:bottom-0 hover:after:opacity-0 hover:after:scale-x-[0.1] hover:after:scale-y-100`;
  switch (style) {
    case "primary":
      return `btn-primary ${animationBaseClass} before:border-y-primary hover:text-primary hover:bg-primary-content`;
    case "secondary":
      return `btn-secondary ${animationBaseClass} before:border-y-secondary hover:text-secondary hover:bg-transparent`;
    case "accent":
      return `btn-accent ${animationBaseClass} before:border-y-accent hover:text-accent hover:bg-transparent`;
    case "ghost":
      return `btn-ghost ${animationBaseClass} before:border-y-ghost hover:text-ghost hover:bg-transparent`;
    case "link":
      return `btn-link ${animationBaseClass} before:border-y-primary`;
    case "outline":
      return `btn-outline ${animationBaseClass} before:border-y-primary hover:text-primary hover:bg-white`;
    default:
      return `btn-primary ${animationBaseClass} before:border-y-primary hover:text-primary hover:bg-primary-content`;
  }
};

const getStaticAnimationClass = (style?: Types.ButtonStyles) => {
  switch (style) {
    case "primary":
      return "btn-primary hover:text-primary hover:bg-transparent";
    case "secondary":
      return "btn-secondary hover:text-secondary hover:bg-transparent";
    case "accent":
      return "btn-accent hover:text-accent hover:bg-transparent hover:border-accent";
    case "ghost":
      return "btn-ghost hover:text-ghost hover:bg-transparent hover:border-ghost";
    case "link":
      return "btn-link hover:border-transparent";
    case "outline":
      return "btn-outline hover:bg-transparent";
    default:
      return "btn-primary hover:text-primary hover:transparent";
  }
};

export const getButtonSizeClass = (size: Types.ButtonSize) => {
  switch (size) {
    case "large":
      return "btn-lg";
    case "small":
      return "btn-sm";
    default:
      return "";
  }
};

export const getButtonAnimationClass = (style: Types.ButtonStyles, animationType: Types.AnimationType) => {
  return animationType === "flyIn" ? getDynamicAnimationClass(style) : getStaticAnimationClass(style);
};

export const getTypographyClass = (style?: Types.TypographyType) => {
  switch (style) {
    case "h1":
      return "font-bold text-3xl italic uppercase md:text-4xl lg:text-5xl";
    case "h2":
      return "font-bold text-2xl md:text-3xl lg:text-4xl";
    case "h3":
      return "font-semibold text-xl md:text-2xl lg:text-3xl";
    case "h4":
      return "font-semibold text-lg md:text-xl lg:text-2xl";
    case "h5":
      return "font-semibold text-sm lg:text-base";
    case "p":
      return "font-normal text-sm lg:text-base";
    case "q":
      return "font-medium text-lg italic md:text-xl lg:text-2xl";
    default:
      return "font-normal text-base";
  }
};

export const getModalMaxWidth = (maxWidth: Types.AvailableModalMaxWidth) => {
  switch (maxWidth) {
    case "small":
      return "max-w-sm";
    case "medium":
      return "max-w-md";
    case "large":
      return "max-w-lg";
    case "xLarge":
      return "max-w-xl";
    default:
      return "max-w-max";
  }
};
