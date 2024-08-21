let plugins = [
  '@babel/plugin-proposal-optional-chaining',
  '@babel/plugin-proposal-nullish-coalescing-operator',
];

// if (import.meta.env.MODE === "production") {
//   plugins.push("transform-remove-console");
// }

module.exports = {
  plugins,
};
