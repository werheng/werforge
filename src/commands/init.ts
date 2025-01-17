import { exec } from 'node:child_process'
import { cpSync } from 'node:fs'
import { resolve } from 'node:path'
import { cwd } from 'node:process'
import { defineCommand } from 'citty'

export default defineCommand({
  meta: {
    name: 'init',
    description: 'init',
  },
  async run() {
    cpSync(
      resolve(cwd(), 'node_modules/werforge/.config'),
      resolve(cwd(), '.config'),
      {
        recursive: true,
        force: true,
      },
    )

    exec('npx simple-git-hooks .config/simple-git-hooks.cjs')
  },
})
