const ButtonBase = require('./shared/ButtonBase');

const defaultProps = {
  borderRadius: '4px',
  fontSize: '1em',
};

const Styles = (p) => {
  const props = Object.assign({}, defaultProps, p);
  const {
    borderRadius,
    fontSize,
  } = props;

  return `
    .c-button {
      ${ButtonBase(props)}
      background: red;
      border-radius: ${borderRadius};
      font-size: ${fontSize};
    }
  `;
};

module.exports = Styles;
