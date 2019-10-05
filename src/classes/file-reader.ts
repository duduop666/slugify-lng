import {readFileSync} from "fs"
import {resolve} from "path"
import {ERRORS, Language} from "../constants"
import {AlphabetMap} from "./common-types"

class FileReader {
  protected readonly language: Language

  constructor(language: Language) {
    this.language = language
  }

  public readFile(): AlphabetMap {
    try {
      const path = resolve(__dirname, `../resources/${this.language}.json`)
      const fileContentJSON = readFileSync(path, "utf8")
      const fileContent = JSON.parse(fileContentJSON)

      return fileContent
    } catch (error) {
      throw new Error(ERRORS.READ_FILE_ERROR)
    }
  }
}

export default FileReader
