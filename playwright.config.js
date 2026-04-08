// @ts-check
import { defineConfig, devices, expect } from '@playwright/test';
import { trace } from 'node:console';
import { url } from 'node:inspector';

//Setting the test environment from Terminal, defaulting to dev if nothing found
require('dotenv').config({
  path: `.env.${process.env.ENV || 'dev'}`
});

const config = {

  testDir: './tests',

  //Failed test retry
  retries: 1,

  //Workers defined for parallel execution
  workers: 3,

  //Universal script wait time.
  timeout: 30 * 1000,

  //Wait time specific to assertions
  expect: {
    timeout: 20 * 1000
  },

  //Reports
  reporter: 'html',

  //Trace on failure
  trace: 'retain-on-failure',

  //Browser and env specifications
  use: {
    baseURL: process.env.BASE_URL,
    browserName: 'chromium',
    headless: true,
    screenshot: 'only-on-failure',
  },

  projects : [
    {
      name : 'chrome',
      use: {
        baseURL: process.env.BASE_URL,
        browserName: 'chromium',
        headless: true,
        screenshot: 'only-on-failure',
      }
    },
    {
      name : 'webkit',
      use: {
        baseURL: process.env.BASE_URL,
        browserName: 'webkit',
        headless: true,
        screenshot: 'only-on-failure',
      }
    }
  ]

};

module.exports = config;
