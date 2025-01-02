import { createRequire } from 'node:module'
import { dirname, join } from 'node:path'
import process from 'node:process'
import { fileURLToPath } from 'node:url'
import { defineCommand } from 'citty'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const require = createRequire(import.meta.url)
const bootstrap = require('commitizen/dist/cli/git-cz.js').bootstrap

const commit = defineCommand({
  meta: {
    name: 'commit',
    description: 'commit changes',
  },
  run() {
    process.argv.pop()
    bootstrap({
      cliPath: join(__dirname, '../node_modules/commitizen'),
      config: {
        path: '@commitlint/cz-commitlint',
      },
    })
  },
})

export default commit
