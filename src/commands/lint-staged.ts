import { exec } from 'node:child_process'
import { resolve } from 'node:path'
import { cwd } from 'node:process'
import { defineCommand } from 'citty'

export default defineCommand({
  meta: {
    name: 'lint-staged',
    description: 'lint-staged',
  },
  run() {
    const configPath = resolve(cwd(), '.config/lint-staged.js')

    exec(`npx lint-staged --config ${configPath}`)
  },
})
