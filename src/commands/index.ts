import { defineCommand, runMain } from 'citty'
import pkg from '../../package.json'

const _default = (mod: any) => mod.default

export const main = defineCommand({
  meta: {
    name: pkg.name,
    version: pkg.version,
    description: pkg.description,
  },
  subCommands: {
    'commit': () => import('./commit').then(_default),
    'commitlint': () => import('./commitlint').then(_default),
    'init': () => import('./init').then(_default),
    'lint-staged': () => import('./lint-staged').then(_default),
  },
})

export function run() {
  runMain(main)
}
