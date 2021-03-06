import {expect} from "chai"
import {describe, test} from "mocha"
import {ERRORS, Language} from "../../constants"
import FileReader from "../file-reader"
import LetterMapper from "../letter-mapper"

describe("class LetterMapper", () => {
  test("New object.mapLetters should return mapped string", () => {
    const letterMapper = new LetterMapper(new FileReader(Language.Russian))
    const result = letterMapper.mapLetters("Олег")
    const expectedResult = "oleg"

    expect(result).equal(expectedResult)
  })

  test("New object.mapLetters should return error on non-exist locale", () => {
    try {
      // @ts-ignore
      const letterMapper = new LetterMapper(new FileReader("Wrong!"))
    } catch (error) {
      expect(error).to.be.instanceOf(Error)
      expect(error.message).equal(ERRORS.READ_FILE_ERROR)
    }
  })
})
