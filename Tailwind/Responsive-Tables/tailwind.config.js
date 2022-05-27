let plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["*"],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant("second", "&:nth-child(2)");
      // Add a `third` variant, ie. `third:pb-0`
      addVariant("third", "&:nth-child(3)");
    }),
  ],
};
