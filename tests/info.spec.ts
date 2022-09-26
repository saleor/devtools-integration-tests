import { describe, it, expect } from 'vitest'
import { execa } from 'execa'

import { Command, SALEOR_COMMAND } from '../src/command'

describe(`${Command.Info} command`, () => {
  it('renders basic details', async () => {
    // TODO: the version should be provided as input, most likely via environment variable
    const version = 'Saleor Commerce CLI v1.16.0'
    const label = 'The commerce API that puts developers first'
    const urls = [
      'https://saleor.io/',
      'https://cloud.saleor.io/',
      'https://github.com/saleor/',
    ]

    const infoCommand = await execa(SALEOR_COMMAND, [Command.Info])

    expect(infoCommand.exitCode).toEqual(0)
    expect(infoCommand.stdout).toContain(version)
    expect(infoCommand.stdout).toContain(label)
    urls.forEach((url) => {
      expect(infoCommand.stdout).toContain(url)
    })
  })
})
