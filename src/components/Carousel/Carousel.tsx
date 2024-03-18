import React, { cloneElement, createRef, forwardRef, ReactElement, RefObject, useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import cn from "@/utils/cn";
import CarouselItem, { CarouselItemProps, CarouselItemWidth } from "./CarouselItem";

export type CarouselProps = React.HTMLAttributes<HTMLDivElement> & {
  children: ReactElement<CarouselItemProps>[];
  display?: "slider" | "dashed" | "sequential";
  snap?: "start" | "center" | "end";
  vertical?: boolean;
  width?: CarouselItemWidth;
  buttonStyle?: (value: string) => React.ReactElement;
};

const Carousel = forwardRef<HTMLDivElement, CarouselProps>(
  ({ children, display = "slider", snap, vertical, width, buttonStyle, className, ...props }, ref): JSX.Element => {
    const classes = cn("carousel", className, {
      "carousel-center": snap === "center",
      "carousel-end": snap === "end",
      "carousel-vertical": vertical,
      "w-full": display !== "slider",
    });

    const [itemRefs, setItemRefs] = useState<RefObject<HTMLDivElement>[]>([]);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
      const newRefs: RefObject<HTMLDivElement>[] = [];
      children.map(_ => {
        newRefs.push(createRef<HTMLDivElement>());
      });
      setItemRefs(newRefs);
    }, [children]);

    const scrollToIndex = (index: number) => {
      itemRefs[index].current?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: snap,
      });
      setActiveIndex(index);
    };

    return (
      <div className="relative">
        <div role="listbox" aria-label="Image carousel" {...props} ref={ref} className={classes}>
          {children.map((child, i) => {
            return cloneElement(child, {
              key: i,
              innerRef: itemRefs[i],
              index: i + 1,
              children: child.props.children,
              src: child.props.src,
              alt: child.props.alt,
              width: display !== "slider" ? "full" : width,
              hasButtons: display === "sequential",
              buttonStyle,
              onPrev: () => scrollToIndex(i - 1 < 0 ? children.length - 1 : i - 1),
              onNext: () => scrollToIndex(i + 1 > children.length - 1 ? 0 : i + 1),
              ...child.props,
            });
          })}
        </div>
        {display === "dashed" && (
          <div className="bg-[#0F2344] lg:bg-transparent lg:absolute lg:bottom-0 flex justify-center w-full gap-2 lg:h-16">
            {children.map((_, i) => {
              if (buttonStyle != null) {
                return cloneElement(buttonStyle((i + 1).toString()), {
                  key: i,
                  onClick: () => scrollToIndex(i),
                });
              }

              return (
                <FontAwesomeIcon
                  key={i}
                  onClick={() => scrollToIndex(i)}
                  icon={faMinus}
                  className={cn("w-8 text-white cursor-pointer", { "opacity-50": i !== activeIndex })}
                  size="3x"
                  aria-disabled={i === activeIndex}
                />
              );
            })}
          </div>
        )}
      </div>
    );
  }
);

Carousel.displayName = "Carousel";

export default Object.assign(Carousel, { Item: CarouselItem });
