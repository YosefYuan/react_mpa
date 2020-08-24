'use strict';
const path = require('path');
const fs = require('fs');
const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

module.exports = {
    page1: {
        template: resolveApp('public/page1.html'),
    },
    page2: {
        template: resolveApp('public/page2.html')
    }
}