const fs = require('fs');

fs.readdir('node_modules', (err, fontdirs) => {
  for (let fontdir of fontdirs) {
    fs.copyFileSync(`node_modules/${fontdir}/index.css`, `${fontdir}.css`);
    fs.readdir(`node_modules/${fontdir}/files`, (err, fonts) => {
      for (let font of fonts) {
        fs.copyFileSync(`node_modules/${fontdir}/files/${font}`, `files/${font}`);
      }
    })
  }
});
