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

export const genereateRandomId = (value: string) => {
  return `${value}1234567890±±!@#$%ˆ&*()?/><`
    .split("")
    .filter(item => item !== " ")
    .sort(function () {
      return 0.5 - Math.random();
    })
    .join("");
};
