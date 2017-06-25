const renderProps = require('../lib/Casein').renderProps;

const rule = () => {
  const test = true;
  const props = {
    backgroundColor: 'red',
    color: 'blue',
    padding: test ? '10px' : '',
  }

  return `
    .co {
      ${renderProps(props)}
      box-shadow: 0 0 1px rgba(black, 0.2);

      &__child {
        ${renderProps(props)}
      }
    }
  `;
};

module.exports = rule;
