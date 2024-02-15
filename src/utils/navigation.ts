export const getProgramNavigationLinks = (slug: string) => [
  {
    name: "Program Overview",
    href: `/program/${slug}`,
  },
  {
    name: "League Operations",
    href: `/program/${slug}/operations`,
  },
  {
    name: "Schedule",
    href: `/program/${slug}/schedule`,
  },
];
