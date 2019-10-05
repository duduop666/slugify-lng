import { Language } from "../constants";
import { IFileReader } from "./common-types";
declare class LetterMapper {
    protected readonly fileReader: IFileReader;
    constructor(language: Language);
    mapLetters(s: string): string;
}
export default LetterMapper;
//# sourceMappingURL=letter-mapper.d.ts.map