'use strict';

/**
 * @fileoverview Copies files from Hercules npm package to Bracket project src.
 */

const path = require('path');
const fs = require('fs-extra');
const herculesPath = 'node_modules/glue/hercules/';

const copyFiles = [
  {
    src: path.join(herculesPath, 'lib/assets/icons/svgs.inc.html'),
    dest: 'src/hercules-assets/icons/svgs.inc.html',
  },
  {
    src: path.join(herculesPath, 'lib/components/modal/modal-template.html'),
    dest: 'src/hercules-assets/templates/modal.html',
  },
];

copyFiles.forEach((files) => {
  fs.copySync(path.resolve(__dirname, files.src), files.dest);
});
