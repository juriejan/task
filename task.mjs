#!/bin/sh
':' //; exec node --experimental-modules "$0" "$@"

import Tasks from './tasks.mjs'

import(process.cwd() + '/tasks/index.mjs').then((module) => {
  const tasks = module.default
  let argv = process.argv.slice(2)
  let name = argv[0]
  tasks.run(name, argv)
})
