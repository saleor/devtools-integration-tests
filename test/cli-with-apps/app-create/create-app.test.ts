import {test, beforeEach, expect} from "vitest";
import {$, sleep} from 'zx'
const rimraf = require('rimraf')
import fkill from 'fkill';
import puppeteer from 'puppeteer'

beforeEach(async () => {
    rimraf.sync('test-app')
    await fkill(":3000")
})

test('CLI can create and run app-template',async () =>{
    await $`saleor app create test-app --json --deps false`
    await $`cd test-app && pnpm i`
    $`cd test-app && pnpm dev`

    await sleep(2000)
    // open puppeteer & test if app created
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto('http://localhost:3000')
    const text = await page.$eval('#__next', el => el.textContent)
    expect(text).toContain('Saleor Dashboard')
    await browser.close()
});