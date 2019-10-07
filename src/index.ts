import FileReader from "./classes/file-reader"
import LetterMapper from "./classes/letter-mapper"
import StringFormatter from "./classes/string-formatter"
import {Language} from "./constants"

function slugifyString(s: string, language: Language): string {
  const letterMapper = new StringFormatter(
    new LetterMapper(
      new FileReader(language),
    ),
  )

  return letterMapper.prepareString(s)
}

export {
  slugifyString,
}
