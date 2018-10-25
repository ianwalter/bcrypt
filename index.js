#!/usr/bin/env node

const bcrypt = require('bcrypt')
const meow = require('meow')
const { cyan } = require('chalk')

const run = async () => {
  const cli = meow(`
  Usage
    bcrypt <password> <rounds?>

  Example
    ❯ bcrypt ou812! 12
    🔑 $2b$12$HMJFAblrhBCGxTWv5BnIFe.zMkYT2gbiSQcwf69ITjP8bdR5Jjng6
  `)

  const rounds = parseInt(cli.input[1], 10) || 10
  const hash = await bcrypt.hash(cli.input[0], rounds)

  console.log(cyan(`\n  🔑 ${hash}`))
}

run()
