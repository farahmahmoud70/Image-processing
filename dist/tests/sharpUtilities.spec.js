"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sharpUtilities_1 = require("../utilities/sharpUtilities");
it("expect image to be resized", () => {
    expect(() => {
        (0, sharpUtilities_1.sharpResize)("src/images/fjord.jpg", 300, 300);
    }).not.toThrow();
});
