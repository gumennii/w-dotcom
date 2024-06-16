export const getProgramNavigationLinks = (slug: string) => [
  {
    name: "Program Overview",
    href: `/program/${slug}#overview`,
    id: "#overview",
  },
  {
    name: "League Operations",
    href: `/program/${slug}#operations`,
    id: "#operations",
  },
  {
    name: "Schedule",
    href: `/program/${slug}#schedule`,
    id: "#schedule",
  },
];

export const genereateRandomId = (value: string) => {
  return `${value}1234567890±±!@#$%ˆ&*()?/><`
    .split("")
    .filter(item => item !== " ")
    .sort(function () {
      return 0.5 - Math.random();
    })
    .join("");
};
