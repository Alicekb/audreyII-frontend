const assets = require("./assets")
// @ponicode
describe("assets", () => {
    test("0", () => {
        let callFunction = () => {
            assets(() => "return callback value")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            assets(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
