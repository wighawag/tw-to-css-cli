#!/usr/bin/env node
const { twi } = require("tw-to-css");

const args = process.argv.slice(2);
if (args.length == 0) {
    console.log(`tw-to-css <args...>`)
} else {
    console.log(twi(args.join(' ')).split(';').join(';\n'));
}



