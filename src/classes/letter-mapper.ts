import {AlphabetMap, IFileReader} from "./common-types"

class LetterMapper {
  protected readonly fileReader: IFileReader

  constructor(fileReader: IFileReader) {
    this.fileReader = fileReader
  }

  public mapLetters(s: string): string {
    const alphabetMap: AlphabetMap = this.fileReader.readFile()
    const arrayfiedString: string[] = [].slice.call(s.toLowerCase())
    const mappedArray = arrayfiedString.map((element: string) => alphabetMap[element] || element)

    return mappedArray.join("")
  }
}

export default LetterMapper
