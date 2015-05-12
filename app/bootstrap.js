var config = require('./config.json');
var themeName = config.theme.name;
var themeFile = './css/' + process.platform + '.css';
var theme = document.createElement('link');
theme.href = themeFile;
theme.rel = 'stylesheet';
var head = document.getElementsByTagName('head')[0];
head.appendChild(theme);