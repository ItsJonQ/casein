const Button = require('./components/Button');
const Rando = require('./rando');

const props = {
  appearance: true,
  fontSize: '14px',
  userSelect: false,
};

module.exports = `
  ${Button()}
  ${Rando()}
`;
