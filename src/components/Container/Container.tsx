import { FC } from "react";
import cn from "@/utils/cn";
import { BackgroundTypes, PaddingSize } from "@/utils/styling";
import { ContainerProps, ContainerVariants } from "./";
import { BaseContainer } from "./BaseContainer";
import { ScreenContainer } from "./ScreenContainer";
import { BackgroundWrapper } from "./helpers";

const Container: FC<ContainerProps> = ({
  id,
  backgroundType,
  paddingTop = PaddingSize.Medium,
  paddingBottom = PaddingSize.Medium,
  marginTop = PaddingSize.None,
  marginBottom = PaddingSize.None,
  containerVariant,
  children,
  backgroundClassName = "",
  className,
  maxWidth,
}) => {
  if (containerVariant === ContainerVariants.FluidContent) {
    return (
      <div id={id}>
        <BackgroundWrapper
          paddingTop={paddingTop}
          backgroundType={backgroundType || BackgroundTypes.Transparent}
          paddingBottom={paddingBottom}
          marginTop={marginTop}
          marginBottom={marginBottom}
          backgroundClassName={backgroundClassName}
        >
          <BaseContainer className={className} maxWidth={maxWidth}>
            {children}
          </BaseContainer>
        </BackgroundWrapper>
      </div>
    );
  }

  if (containerVariant === ContainerVariants.BackgroundInContainer) {
    return (
      <ScreenContainer id={id} className={className} maxWidth={maxWidth}>
        <BackgroundWrapper
          paddingTop={paddingTop}
          backgroundType={backgroundType || BackgroundTypes.Transparent}
          paddingBottom={paddingBottom}
          marginTop={marginTop}
          marginBottom={marginBottom}
          backgroundClassName={cn(backgroundClassName)}
        >
          {children}
        </BackgroundWrapper>
      </ScreenContainer>
    );
  }

  return (
    <div id={id}>
      <BackgroundWrapper
        paddingTop={paddingTop}
        backgroundType={backgroundType || BackgroundTypes.Transparent}
        paddingBottom={paddingBottom}
        marginTop={marginTop}
        marginBottom={marginBottom}
        backgroundClassName={backgroundClassName}
      >
        <ScreenContainer className={className} maxWidth={maxWidth}>
          {children}
        </ScreenContainer>
      </BackgroundWrapper>
    </div>
  );
};

export default Container;
