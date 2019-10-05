import { Language } from "../constants";
import { AlphabetMap } from "./common-types";
declare class FileReader {
    protected readonly language: Language;
    constructor(language: Language);
    readFile(): AlphabetMap;
}
export default FileReader;
//# sourceMappingURL=file-reader.d.ts.map