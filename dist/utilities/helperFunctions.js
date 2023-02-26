"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeData = exports.dirExist = exports.makeDir = void 0;
const fs_1 = require("fs");
const makeDir = (path, options) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield fs_1.promises.mkdir(path, options);
    }
    catch (err) {
        console.log(err);
        throw err;
    }
});
exports.makeDir = makeDir;
// export const makeDir = async (path: string, options?:{[name:string]:unknown}): Promise<void> => {
//   mkdirSync(path, options);
// }
const dirExist = (path) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return (0, fs_1.existsSync)(path);
    }
    catch (err) {
        console.log(err);
        throw err;
    }
});
exports.dirExist = dirExist;
const writeData = (path, data, options) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return fs_1.promises.writeFile(path, data, options);
    }
    catch (err) {
        console.log(err);
        throw err;
    }
});
exports.writeData = writeData;
