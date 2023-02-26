"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Require Express to run server and routes
const express_1 = __importDefault(require("express"));
// Dependancies
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
// routes and logger
const index_1 = __importDefault(require("./routes/index"));
const logger_1 = __importDefault(require("./utilities/logger"));
// Start up an instance of app
const app = (0, express_1.default)();
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
// Cors for cross origin allowance
app.use((0, cors_1.default)());
const port = 3000;
// listening
const listening = () => {
    console.log('server running');
    console.log(`server is running on port ${port}`);
};
// Setup Server
app.listen(port, listening);
// handling routes
app.use('/api', logger_1.default, index_1.default);
// Env variables
process.env.ROOT_PATH = path_1.default.resolve(__dirname);
