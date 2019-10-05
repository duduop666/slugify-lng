import {expect} from "chai"
import {describe, test} from "mocha"
import {ERRORS, Language} from "../../constants"
import FileReader from "../file-reader"

describe("class FileReader", () => {
  test("New object should have 2 fields", () => {
    const fileReader = new FileReader(Language.English)
    // @ts-ignore
    const result = Object.keys(fileReader).length + Object.keys(fileReader.__proto__).length
    const expectedResult = 2

    expect(result).equals(expectedResult)
  })

  test("New object should have own `language` field equal to one that has been passed to constructor", () => {
    const expectedLanguage = Language.English
    const fileReader = new FileReader(expectedLanguage)

    // @ts-ignore
    expect(fileReader.language).equals(expectedLanguage)
  })

  test("New object.readFile should return file content", () => {
    const fileReader = new FileReader(Language.Russian)
    const readResult = fileReader.readFile()

    expect(readResult).to.be.an("object")
    expect(Object.keys(readResult).length).to.be.greaterThan(1)
  })

  test("New object.readFile should return error on non-exist locale", () => {
    // @ts-ignore
    const fileReader = new FileReader("wrong!")

    try {
      const readResult = fileReader.readFile()
    } catch (error) {
      expect(error).to.be.instanceOf(Error)
      expect(error.message).equal(ERRORS.READ_FILE_ERROR)
    }
  })
})
