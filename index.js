#!/usr/bin/env node

const tasks = require(process.cwd() + '/tasks')

const log = tasks.log

let argv = process.argv.slice(2)
let taskName = argv[0]

tasks[taskName](argv.slice(1)).catch((err) => {
	if (log) log.error(err)
})
