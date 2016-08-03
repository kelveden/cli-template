#!/usr/bin/env node

const Printer = require('./printer');

const action = (myarg, options) => {
    const printer = new Printer(options);
    const proxy = require('./proxy')(options);

    proxy.get("http://ip.jsontest.com/", printer.printResponse());
};

const command = (program) => {
    program
        .command('CMD <myarg>')
        .description("Does stuff.")
        .action(action);
};

exports.action = action;
exports.command = command;