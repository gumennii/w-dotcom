export const getTableSize = (size: string) => {
  switch (size) {
    case "tiny":
      return "table-xs";
    case "small":
      return "table-sm";
    case "large":
      return "table-lg";
    case "full":
      return "table-full w-full";
    default:
      return "";
  }
};

export const getTableAlign = (value: string) => {
  switch (value) {
    case "left":
      return "text-left";
    case "center":
      return "text-center";
    case "right":
      return "text-right";
    default:
      return "";
  }
};
