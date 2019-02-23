import test from 'ava'
import execaHelper from '@ianwalter/execa-helper'

const withCli = execaHelper('./dist/bcrypt.js')

test('command', withCli, async (t, cli) => {
  const { stdout } = await cli('somepassword')
  t.snapshot(stdout)
})
