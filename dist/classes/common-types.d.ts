export interface AlphabetMap {
    [key: string]: string;
}
export interface IFileReader {
    readFile(): AlphabetMap;
}
export interface ILetterMapper {
    mapLetters(s: string): string;
}
//# sourceMappingURL=common-types.d.ts.map