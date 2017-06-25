const isFunction = require('lodash.isfunction');
const kebabCase = require('lodash.kebabcase');

const renderProps = (props = {}) => {
  return Object.keys(props).reduce((rules, prop) => {
    const propValue = props[prop];
    const value = isFunction(propValue) ? propValue() : propValue;
    if (value && value.length) {
      rules += `${kebabCase(prop)}: ${value};\n`;
    }
    return rules;
  }, '');
};

module.exports = {
  renderProps,
};
