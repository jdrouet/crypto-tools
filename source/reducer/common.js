const generateConstants = (domain) => (key) => [
  domain.toLowerCase(),
  key.toLowerCase(),
].join('.');

export default {
  generateConstants,
};
