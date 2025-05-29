module.exports = {
  // ... existing config ...
  module: {
    rules: [
      // ... other rules ...
      {
        test: /\.(pdf)$/i,
        type: "asset/resource",
      },
    ],
  },
};
