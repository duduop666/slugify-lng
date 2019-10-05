"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var file_reader_1 = __importDefault(require("./file-reader"));
var LetterMapper = (function () {
    function LetterMapper(language) {
        this.fileReader = new file_reader_1.default(language);
    }
    LetterMapper.prototype.mapLetters = function (s) {
        var alphabetMap = this.fileReader.readFile();
        var arrayfiedString = [].slice.call(s.toLowerCase());
        var mappedArray = arrayfiedString.map(function (element) { return alphabetMap[element]; });
        return mappedArray.join("");
    };
    return LetterMapper;
}());
exports.default = LetterMapper;
