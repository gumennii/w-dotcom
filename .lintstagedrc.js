const path = require("path");

const buildEslintCommand = filenames => {
  const relativeFiles = filenames.map(f => path.relative(process.cwd(), f)).join(" --file ");
  const formatCommand = `npx prettier --write ${relativeFiles}`;
  const eslintCommand = `next lint --fix --file ${relativeFiles}`;
  const tscCommand = "tsc --noEmit";

  return `sh -c "${formatCommand} && ${tscCommand} && ${eslintCommand}"`;
};

module.exports = {
  "*.{js,ts,tsx}": [buildEslintCommand],
  "*.{js,ts,tsx,css,scss}": ["prettier --write"],
};
