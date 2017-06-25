const fs = require('fs');
const mkdirp = require('mkdirp');
const sass = require('node-sass');

const file = 'build';

const build = (styles = '') => {
  return sass.render({
    data: styles,
    includePaths: [],
  }, function(error, result) {
    if (error) {
      console.error(error);
      return process.exit(1);
    }
    else {
      console.log(result.css.toString('utf8'));
      mkdirp('./build');
      fs.writeFile('./build/'+file+'.css', result.css, function(err){
        if(!err){
          return console.log(file+'.css created.');
        }
      })
    }
  });
};

module.exports = build;
