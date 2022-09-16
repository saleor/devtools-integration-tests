import {test, beforeEach} from "vitest";
import {$, cd} from 'zx'
const rimraf = require('rimraf')
import fkill from 'fkill';
import puppeteer from 'puppeteer'

beforeEach(async () => {
    rimraf.sync('test-app')
    // await fkill(":3000")
})

test('CLI can create and run app-template',async () =>{
    await $`saleor app create test-app --json --deps false`
    await $`cd test-app && pnpm i`
    // fails
    await $.spawn(`cd test-app && pnpm dev`)

    console.log(await $`curl localhost:3000`)

    // open puppeteer & test if app created

    // cleanup
});