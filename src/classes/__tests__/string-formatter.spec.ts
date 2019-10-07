import {expect} from "chai"
import {describe, test} from "mocha"
import {ERRORS, Language} from "../../constants"
import FileReader from "../file-reader"
import LetterMapper from "../letter-mapper"
import StringFormatter from "../string-formatter"

describe("class LetterMapper", () => {
  test("New object.mapLetters should return mapped string", () => {
    const stringFormatter = new StringFormatter(
      new LetterMapper(
        new FileReader(Language.Russian),
      ),
    )
    const result = stringFormatter.prepareString("ОлегИ ЛСП и ")
    const expectedResult = "olegi-lsp-i"

    expect(result).equal(expectedResult)
  })

  test("New object.mapLetters should return error on non-exist locale", () => {
    try {
      const stringFormatter = new StringFormatter(
        new LetterMapper(
          // @ts-ignore
          new FileReader("Wrong!"),
        ),
      )
    } catch (error) {
      expect(error).to.be.instanceOf(Error)
      expect(error.message).equal(ERRORS.READ_FILE_ERROR)
    }
  })
})
