import { cpSync } from 'node:fs'
import { resolve } from 'node:path'
import { cwd } from 'node:process'
import { defineCommand } from 'citty'
import { readPackageJSON, writePackageJSON } from 'pkg-types'

export default defineCommand({
  meta: {
    name: 'init',
    description: 'init',
  },
  async run() {
    const packageJson = await readPackageJSON(cwd())

    if (!packageJson['simple-git-hooks']) {
      packageJson['simple-git-hooks'] = {
        'pre-commit': 'werforge lint-staged',
        'commit-msg': 'werforge commitlint',
      }

      await writePackageJSON(resolve(cwd(), 'package.json'), packageJson)
    }

    cpSync(
      resolve(cwd(), 'node_modules/werforge/.config'),
      resolve(cwd(), '.config'),
      {
        recursive: true,
        force: true,
      },
    )
  },
})
