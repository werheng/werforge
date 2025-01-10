import { exec } from 'node:child_process'
import { resolve } from 'node:path'
import { cwd } from 'node:process'
import { defineCommand } from 'citty'

export default defineCommand({
  meta: {
    name: 'commitlint',
    description: 'commitlint',
  },
  run() {
    const configPath = resolve(cwd(), '.config/commitlint.js')

    exec(`npx commitlint --edit --config ${configPath}`)
  },
})
