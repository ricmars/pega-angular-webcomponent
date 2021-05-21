const replace = require('replace-in-file');

const optionsFile1 = {
  files: './docs/index.html',
  from: /src="/g,
  to: 'src=".\/',
};
replace(optionsFile1)
  .then((results) => {
    console.log('Replacement results:', results);
  })
  .catch((error) => {
    console.error('Error occurred:', error);
  });
