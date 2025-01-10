import { createRequire } from 'node:module'
import { join } from 'node:path'
import process from 'node:process'
import { defineCommand } from 'citty'

const require = createRequire(import.meta.url)

export default defineCommand({
  meta: {
    name: 'commit',
    description: 'git commit changes',
  },
  run() {
    process.argv.pop()

    const bootstrap = require('commitizen/dist/cli/git-cz.js').bootstrap

    bootstrap({
      cliPath: join(require.resolve('commitizen'), '../../'),
      config: {
        path: 'cz-conventional-changelog',
      },
    })
  },
})
