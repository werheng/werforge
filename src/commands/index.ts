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
    commit: () => import('./commit').then(_default),
  },
})

export function run() {
  runMain(main)
}
