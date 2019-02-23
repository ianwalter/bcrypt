#!/usr/bin/env node

import bcrypt from 'bcrypt'
import meow from 'meow'
import { cyan } from 'chalk'

async function runBcrypt () {
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

runBcrypt()
