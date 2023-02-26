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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("../routes/index"));
describe('Routes Index Desciptions', () => {
    it('expect route / has the response main routes', () => __awaiter(void 0, void 0, void 0, function* () {
        const app = (0, express_1.default)();
        app.use('/', index_1.default);
        const res = yield (0, supertest_1.default)(app).get('/');
        expect(res.header['content-type']).toBe('text/html; charset=utf-8');
        expect(res.statusCode).toBe(200);
        expect(res.text).toEqual('main routes');
    }));
    it("expect an error if route / doesn'nt exist'", () => __awaiter(void 0, void 0, void 0, function* () {
        const app = (0, express_1.default)();
        const res = yield (0, supertest_1.default)(app).get('');
        expect(res.statusCode).toBe(404);
    }));
});
