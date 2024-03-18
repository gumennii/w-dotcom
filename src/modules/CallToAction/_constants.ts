export type AppsLinks = {
  href?: string;
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

export type LinkButton = {
  url: string;
  name: string;
};

export const images: AppsLinks[] = [
  {
    src: "/image-6.jpg",
    alt: "CTA image 6",
  },
  {
    src: "/image-5.jpg",
    alt: "CTA image 5",
  },
];
