const defaultProps = {
  appearance: true,
};

const Style = (props = defaultProps) => {
  const appearance = !props.appearance ? '' : `
    -webkit-appearance: none;
    appearance: none;
  `;

  return `
    ${appearance}
    box-sizing: border-box;
    cursor: pointer;
    outline: none;
    vertical-align: middle;
    -webkit-user-select: none;
    user-select: none;
  `;
};

module.exports = Style;
