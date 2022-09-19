import { describe, it, expect } from 'vitest'
import { execa } from 'execa'
import { EOL } from 'os'

import { Command } from '../src/command'

describe(`${Command.Help} command`, () => {
  it('lists all available commands', async () => {
    const allCommands = Object.values(Command).filter((c) => c != Command.Help)

    const helpCommand = await execa('saleor', [Command.Help])

    expect(helpCommand.exitCode).toEqual(0)
    allCommands.forEach((command) => {
      expect(helpCommand.stdout).toContain(`saleor ${command}`)
    })
  })

  it('lists description for selected commands', async () => {
    const helpCommand = await execa('saleor', [Command.Help])
    const lines = helpCommand.stdout.split(EOL)

    const infoCommand = lines.find((line) =>
      line.includes(`${'saleor'} ${Command.Info}`),
    )
    expect(infoCommand).toContain('Hello from Saleor')

    const loginCommand = lines.find((line) =>
      line.includes(`${'saleor'} ${Command.Login}`),
    )
    expect(loginCommand).toContain('Log in to the Saleor Cloud')

    const logoutCommand = lines.find((line) =>
      line.includes(`${'saleor'} ${Command.Logout}`),
    )
    expect(logoutCommand).toContain('Log out from the Saleor Cloud')

    const configureCommand = lines.find((line) =>
      line.includes(`${'saleor'} ${Command.Configure}`),
    )
    expect(configureCommand).toContain('Configure Saleor CLI')

    const registerCommand = lines.find((line) =>
      line.includes(`${'saleor'} ${Command.Register}`),
    )
    expect(registerCommand).toContain('Create Saleor account')

    const triggerCommand = lines.find((line) =>
      line.includes(`${'saleor'} ${Command.Trigger}`),
    )
    expect(triggerCommand).toContain('This triggers a Saleor event')
  })

  it('lists aliases for selected commands', async () => {
    const helpCommand = await execa('saleor', [Command.Help])
    const lines = helpCommand.stdout.split(EOL)

    const organizationCommand = lines.find((line) =>
      line.includes(`${'saleor'} ${Command.Organization}`),
    )
    expect(organizationCommand).toContain('[aliases: org]')

    const environmentCommand = lines.find((line) =>
      line.includes(`${'saleor'} ${Command.Environment}`),
    )
    expect(environmentCommand).toContain('[aliases: env]')

    const storefrontCommand = lines.find((line) =>
      line.includes(`${'saleor'} ${Command.Storefront}`),
    )
    expect(storefrontCommand).toContain('[aliases: store]')

    const telemetryCommand = lines.find((line) =>
      line.includes(`${'saleor'} ${Command.Telemetry}`),
    )
    expect(telemetryCommand).toContain('[aliases: tele]')

    const webhookCommand = lines.find((line) =>
      line.includes(`${'saleor'} ${Command.Webhook}`),
    )
    expect(webhookCommand).toContain('[aliases: hook]')
  })

  it('lists all available options', async () => {
    const helpCommand = await execa('saleor', [Command.Help])
    const lines = helpCommand.stdout.split(EOL)

    const jsonOutputOption = lines.find((line) => line.includes('--json'))
    expect(jsonOutputOption).toContain('Output the data as JSON')
    expect(jsonOutputOption).toContain('[boolean]')

    const versionOption = lines.find((line) => line.includes('-V, --version'))
    expect(versionOption).toContain('Show version number')
    expect(versionOption).toContain('[boolean]')

    const helpOption = lines.find((line) => line.includes('-h, --help'))
    expect(helpOption).toContain('Show help')
    expect(helpOption).toContain('[boolean]')
  })
})
