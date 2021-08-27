import { getMonth } from "./index.js";

describe("test getMonth function", () => {
    it("should return the name of the month for numbers from 1 to 12", () => {
        expect(getMonth(5)).toBe('май');
        expect(getMonth(7)).toBe('июль');
    }),
        it("should not return name of the month as number=0", () => {
            expect(getMonth(0)).toBe('не найдено');
        }),
        it("should not  return the name of the month as number>12", () => {
            expect(getMonth(15)).toBe('не найдено');
        })

})
