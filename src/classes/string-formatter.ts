import {ILetterMapper} from "./common-types"

class StringFormatter {
  private readonly letterMapper: ILetterMapper

  constructor(letterMapper: ILetterMapper) {
    this.letterMapper = letterMapper
  }

  public prepareString(s: string): string {
    const preparedString = s
      .trim()
      .toLowerCase()
      .replace(/ /g, "-")
    return this.letterMapper.mapLetters(preparedString)
  }
}

export default StringFormatter
