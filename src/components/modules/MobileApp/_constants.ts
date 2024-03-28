export type AppsLinks = {
  key?: string;
  href?: string;
  src?: string;
  alt: string;
  width?: number;
  height?: number;
};

export const defaultAppsLinks: AppsLinks[] = [
  {
    key: "appStore",
    href: "#",
    alt: "App Store",
  },
  {
    key: "googlePlay",
    href: "#",
    alt: "Google Play",
  },
];

export const desktopImages: AppsLinks[] = [
  {
    src: "/android_desktop.png",
    alt: "Android phone",
    width: 255,
    height: 552,
  },
  {
    src: "/iPhone_desktop.png",
    alt: "Iphone",
    width: 255,
    height: 527,
  },
];
export const tabletAndMobileImages: AppsLinks[] = [
  {
    src: "/android_tablet.png",
    alt: "Android phone",
    width: 255,
    height: 250,
  },
  {
    src: "/iPhone_tablet.png",
    alt: "Iphone",
    width: 255,
    height: 270,
  },
];
