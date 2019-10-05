"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var letter_mapper_1 = __importDefault(require("./classes/letter-mapper"));
var constants_1 = require("./constants");
function slugifyString(s, language) {
    var letterMapper = new letter_mapper_1.default(language || constants_1.Language.English);
    return letterMapper.mapLetters(s);
}
exports.slugifyString = slugifyString;
