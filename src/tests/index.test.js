import sum from "../index"
describe("when summing integer then", () => {
    test("1 plus 1 and return 2", () => {
      let left = 1
      let right = 1

      let actual = sum(left, right)

      expect(actual).toBe(2)
    })
})