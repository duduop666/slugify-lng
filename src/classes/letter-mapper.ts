import {Language} from "../constants"
import {AlphabetMap, IFileReader} from "./common-types"
import FileReader from "./file-reader"

class LetterMapper {
  protected readonly fileReader: IFileReader

  constructor(language: Language) {
    this.fileReader = new FileReader(language)
  }

  public mapLetters(s: string): string {
    const alphabetMap: AlphabetMap = this.fileReader.readFile()
    const arrayfiedString: string[] = [].slice.call(s.toLowerCase())
    const mappedArray = arrayfiedString.map((element: string) => alphabetMap[element])

    return mappedArray.join("")
  }
}

export default LetterMapper
