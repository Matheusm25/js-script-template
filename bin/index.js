#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

if (!process.argv[2]) {
  throw new Error('Must receive a name');
}

fs.mkdirSync(path.join('./', process.argv[2]));

const eslintConfig = fs.readFileSync(
  path.join(__dirname, '../', 'templates', '.eslintrc.js'),
  'utf-8',
);
fs.writeFileSync(
  path.join('./', process.argv[2], '.eslintrc.js'),
  eslintConfig,
);

const prettierConfig = fs.readFileSync(
  path.join(__dirname, '../', 'templates', '.prettierrc'),
  'utf-8',
);
fs.writeFileSync(
  path.join('./', process.argv[2], '.prettierrc'),
  prettierConfig,
);

const packageJson = fs.readFileSync(
  path.join(__dirname, '../', 'templates', 'template-package.json'),
  'utf-8',
);
fs.writeFileSync(
  path.join('./', process.argv[2], 'package.json'),
  packageJson.split('{{name}}').join(process.argv[2]),
);

fs.mkdirSync(path.join('./', process.argv[2], 'src'));

const mainFile = fs.readFileSync(
  path.join(__dirname, '../', 'templates', 'index.js'),
  'utf-8',
);
fs.writeFileSync(path.join('./', process.argv[2], 'src', 'index.js'), mainFile);

console.log('project created');
console.log('run cd', process.argv[2], ' and then npm install or yarn');
