// @ts-check
import { defineConfig, devices, expect } from '@playwright/test';
import { trace } from 'node:console';
import { url } from 'node:inspector';

const config = {

  testDir: './tests',

  //Universal script wait time.
  timeout: 30 * 1000,

  //Wait time specific to assertions
  expect: {
    timeout: 5 * 1000
  },

  //Reports
  reporter: 'html',

  //Trace on failure
  trace: 'retain-on-failure',

  //Browser specifications
  use: {
    browserName: 'chromium',
    headless: false
  },

};

module.exports = config;

