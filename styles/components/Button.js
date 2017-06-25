const ButtonBase = require('./shared/ButtonBase');

const defaultProps = {
  background: 'red',
  borderRadius: '4px',
  fontSize: '1em',
};

const Button = (p) => {
  const props = Object.assign({}, defaultProps, p);
  const {
    background,
    borderRadius,
    fontSize,
  } = props;

  return `
    .c-button {
      ${ButtonBase(props)}
      background: ${background};
      border-radius: ${borderRadius};
      font-size: ${fontSize};

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
