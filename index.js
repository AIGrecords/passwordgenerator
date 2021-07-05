#!/usr/bin/env node

const program = require('commander');
const chalk = require('chalk');
const clipboardy = require('clipboardy');
const createPassword = require('./utils/createPassword');
const savePassword = require('./utils/savePassword');
const log = console.log;

program.version('1.0.0').description('Commandline Tool For Generating Passwords');

program
    .option('-l, --length <number>', 'length of password', '8')
    .option('-s, --save', 'save generated passwords to passwords.txt')
    .option('-nn, --no-numbers', 'Generate without numbers')
    .option('-ns, --no-symbols', 'Generate without symbols')
    .parse();

// console.log(program.opts()); FOR DEBUGGING

const { length, save, numbers, symbols } = program.opts();


const generatedPassword = createPassword(length, numbers, symbols);


if(save)
{
    savePassword(generatedPassword);
}


clipboardy.writeSync(generatedPassword);

log(chalk.green('Generated Password: ') + chalk.bold(generatedPassword));
log(chalk.yellow('Password copied to clipboard...'));