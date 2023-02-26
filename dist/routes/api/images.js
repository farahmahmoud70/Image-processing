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
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const helperFunctions_1 = require("../../utilities/helperFunctions");
const sharpUtilities_1 = require("../../utilities/sharpUtilities");
const images = express_1.default.Router();
images.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // get width and height, then convert them into numbers
        const width = parseInt(req.query.width);
        const height = parseInt(req.query.height);
        const filename = req.query.filename;
        const filetype = req.query.filetype;
        // handle validation
        if (!width || (Number.isInteger(width) && width > 0) || !height || (Number.isInteger(height) && height > 0) || !filename || !filetype) {
            res
                .status(403)
                .send('The following error accouring processing your image remedy and try again: Error: some of the inputs are missing or having a bad format.');
            return;
        }
        // resize the image
        const image = (0, sharpUtilities_1.sharpResize)(path_1.default.join(process.env.ROOT_PATH, `images/${filename}.${filetype}`), width, height);
        // create buffer form the resized image
        const imageBuffer = yield (0, sharpUtilities_1.sharpBuffer)(image);
        // make path for the thumb dir
        const thumbPath = path_1.default.join(process.env.ROOT_PATH, 'thumb');
        // check of thumb dir exist or not
        const isDirExist = yield (0, helperFunctions_1.dirExist)(thumbPath);
        // if exist will count. and if not will create the thumb dir
        if (!isDirExist)
            yield (0, helperFunctions_1.makeDir)(thumbPath);
        // after creating the dir will move the resized image into the thumb dir
        yield (0, sharpUtilities_1.sharpToFile)(image, path_1.default.join(thumbPath, `thumb-${filename}-${width}x${height}.${filetype}`));
        //add http headers for caching it will expire in one day.
        res.set({
            'Cache-Control': 'public, max-age=86400',
            Expires: new Date(Date.now() + 86400000).toUTCString(),
        });
        // send the buffered image as a body response
        // also we did use filetype to give us the ability to have diff file(images) types
        res.type(filetype).send(imageBuffer);
    }
    catch (err) {
        console.log(err);
        res.status(403);
        res.send(`The following error accouring processing your image remedy and try again: Error: ${err}`);
    }
}));
exports.default = images;
