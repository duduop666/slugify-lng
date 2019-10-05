import LetterMapper from "./classes/letter-mapper"
import {Language} from "./constants"

function slugifyString(s: string, language: Language): string {
  const letterMapper = new LetterMapper(language || Language.English)

  return letterMapper.mapLetters(s)
}

export {
  slugifyString,
}
