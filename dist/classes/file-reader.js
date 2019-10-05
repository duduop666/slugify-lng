"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var path_1 = require("path");
var constants_1 = require("../constants");
var FileReader = (function () {
    function FileReader(language) {
        this.language = language;
    }
    FileReader.prototype.readFile = function () {
        try {
            var path = path_1.resolve(__dirname, "../resources/" + this.language + ".json");
            var fileContentJSON = fs_1.readFileSync(path, "utf8");
            var fileContent = JSON.parse(fileContentJSON);
            return fileContent;
        }
        catch (error) {
            throw new Error(constants_1.ERRORS.READ_FILE_ERROR);
        }
    };
    return FileReader;
}());
exports.default = FileReader;
