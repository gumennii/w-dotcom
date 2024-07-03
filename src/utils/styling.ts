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
  Footer = "Footer",
  None = "None",
  Video = "Video",
  XSmall = "XSmall",
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
    case MaxWidth.XSmall:
      return "m-auto max-w-screen-sm";
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
    case MaxWidth.Footer:
      return "m-auto max-w-screen-lg";
    case MaxWidth.Video:
      return "m-auto max-w-screen-md";
    default:
      return "";
  }
};

export const getButtonClass = (style?: Types.ButtonStyles) => {
  switch (style) {
    case "primary":
      return "btn-primary text-white normal-case text-sm font-roboto";
    case "secondary":
      return "btn-secondary text-white text-xs font-roboto p-4";
    case "accent":
      return "btn-accent text-sm font-roboto";
    case "ghost":
      return "btn-ghost text-white text-sm font-roboto border border-white p-4 lg:px-6";
    case "link":
      return "btn-link";
    case "outline":
      return "btn-outline text-primary border-primary text-sm font-roboto";
    case "white":
      return "btn-white text-primary text-sm font-roboto p-4 lg:px-6";
    default:
      return "btn-primary text-sm font-roboto";
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
      return "font-superline leading-normal font-bold text-3xl italic uppercase md:text-4xl lg:text-5xl";
    case "h2":
      return "font-sant leading-normal font-bold text-xl md:text-2xl lg:text-3xl";
    case "h3":
      return "font-sant leading-normal font-semibold text-lg md:text-xl lg:text-2xl";
    case "h4":
      return "font-sant leading-normal font-semibold text-base md:text-lg lg:text-xl";
    case "h5":
      return "font-semibold leading-normal text-sm md:text-base lg:text-lg";
    case "h6":
      return "font-normal leading-normal text-sm md:text-base lg:text-lg";
    case "p":
      return "font-normal leading-normal text-xs md:text-sm lg:text-base";
    case "q":
      return "font-sant leading-normal font-medium text-lg italic md:text-xl lg:text-2xl";
    default:
      return "font-normal leading-normal text-[0.878rem] md:text-xs lg:text-sm";
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
    case "2xLarge":
      return "max-w-2xl";
    case "3xLarge":
      return "max-w-screen-md";
    default:
      return "max-w-max";
  }
};

export const getTextColorByProgramType = (type: string) => {
  switch (type) {
    case "Basketball":
      return "text-basketball-secondary";
    case "Camps":
      return `text-camps-secondary`;
    case "Flag Football":
      return "text-flag-football-secondary";
    case "Volleyball":
      return "text-volleyball-secondary";
    default:
      return "text-basketball-secondary";
  }
};

export const getHeroGradientByProgramType = (type: string) => {
  switch (type) {
    case "Basketball":
      return "bg-basketball-primary/85";
    case "Camps":
      return "bg-camps-primary/85";
    case "Flag Football":
      return "bg-flag-football-primary/85";
    case "Volleyball":
      return "bg-volleyball-primary/85";
    default:
      return "bg-basketball-primary/85";
  }
};
