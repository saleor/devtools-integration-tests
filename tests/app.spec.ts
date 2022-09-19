import { describe, it, expect, beforeEach } from 'vitest'
import { execa } from 'execa'
import rimraf from 'rimraf'
import puppeteer from 'puppeteer'
import fkill from 'fkill'

import { Command } from '../src/command'
import { sleep } from '../src/sleep'

describe(`${Command.App} command`, () => {
  beforeEach(async () => {
    rimraf.sync('test-app')
    await fkill(':3000')
  })

  it('creates app from template which is runnable', async () => {
    const createAppCommand = await execa('saleor', [
      Command.App,
      'create',
      'test-app',
      '--json',
      '--deps',
      'false',
    ])

    // Unable to assert this as the app directory is folded within frame of console (the path is cut into 2 lines)
    // const appDirectory = `App directory: ${process.cwd()}/test-app`
    // expect(createAppCommand.stdout).toContain(appDirectory)

    const packageName = 'Package name: test-app'
    expect(createAppCommand.stdout).toContain(packageName)
    expect(createAppCommand.exitCode).toEqual(0)

    const installCommand = await execa('cd test-app && pnpm i', {
      shell: true,
    })
    expect(installCommand.exitCode).toEqual(0)

    execa('cd test-app && pnpm dev', {
      shell: true,
    })

    await sleep(2000)

    // open puppeteer & test if app created
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto('http://localhost:3000')
    const text = await page.$eval('#__next', (el) => el.textContent)
    expect(text).toContain('Saleor Dashboard')
    await browser.close()
  })
})
