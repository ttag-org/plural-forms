const fs = require('fs');
const path = require('path');

let catalog = fs.readFileSync(path.resolve(__dirname, '../src/catalog.js')).toString();
let tpl = fs.readFileSync(path.resolve(__dirname, './minimal-safe.tpl')).toString();

catalog = catalog
.replace(/name:\s\'\w+\'\,/g, '')
.replace(/examples:\s\[[\S\s]+?\],/g, '')
.replace(/pluralsText:.*/g, '')
.replace(/export default\s/, '')
.replace(/nplurals/g, 'n')
.replace(/pluralsFunc/g, 'f')
.replace(/};/g, '}')

const result = tpl.replace('CATALOG_DATA', catalog);

fs.writeFileSync('./src/minimal-safe.js', result);
