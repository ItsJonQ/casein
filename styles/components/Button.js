const ButtonBase = require('./shared/ButtonBase');
const renderProps = require('../../lib/Casein').renderProps;

const defaultProps = {
  background: 'red',
  borderRadius: '4px',
  fontSize: '1em',
};

const Button = (p) => {
  const props = Object.assign({}, defaultProps, p);
  const {
    background,
  } = props;

  return `
    .c-button {
      ${ButtonBase(props)}
      ${renderProps(props)}

      &:hover {
        background: lighten(${background}, 4);
      }
      &:active {
        background: darken(${background}, 4);
      }
    }
  `;
};

module.exports = Button;
