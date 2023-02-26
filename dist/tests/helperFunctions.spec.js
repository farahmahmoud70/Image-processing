"use strict";
// // const Logger = require('./logger');
// import fs from 'fs'
// import { makeDir } from '../utilities/helperFunctions';
// // jasmine.mock('fs')
// // this auto mocks all methods on fs - so you can treat fs.existsSync and fs.mkdirSync like you would jest.fn()
// it('should create a new directory if one doesn\'t already exist', () => {
//   // set up existsSync to meet the `if` condition
//   spyOn(fs, 'existsSync').and.returnValue(false);
//   // make new dir
//   makeDir("test-path")
//   // make your assertion
//   expect(fs.mkdirSync).toHaveBeenCalled();
// });
// it('should NOT create a new log directory if one already exists', () => {
//   // set up existsSync to FAIL the `if` condition
//   spyOn(fs, 'existsSync').and.returnValue(true);
//   expect(fs.mkdirSync).not.toHaveBeenCalled();
// });
