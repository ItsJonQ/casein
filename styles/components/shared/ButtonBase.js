const defaultProps = {
  appearance: true,
  userSelect: true,
};

const ButtonBase = (p) => {
  const props = Object.assign({}, defaultProps, p);
  const appearance = !props.appearance ? '' : `
    -webkit-appearance: none;
    appearance: none;
  `;
  const userSelect = !props.userSelect ? '' : `
    -webkit-user-select: none;
    user-select: none;
  `;

  return `
    ${appearance}
    box-sizing: border-box;
    cursor: pointer;
    outline: none;
    vertical-align: middle;
    ${userSelect}
  `;
};

module.exports = ButtonBase;
