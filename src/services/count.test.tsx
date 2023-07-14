import { count, multiply } from './count'

describe('counter', () => {
    it('Should add 1 to number informed', () => {
        const value = count(1)
        expect(value).toBe(2)
    })

    it('Should multiply number for 2', () => {
        const value = multiply(2, 2)
        expect(value).toBe(4)
    })

    it('Should multiply number for 3', () => {
        const value = multiply(2, 3)
        expect(value).toBe(6)
    })

    it('Should inform error if multiple diferent then 2 or 3', () => {
        const value = multiply(2, 4)
        expect(value).toBe('multiplydor não aceito')
    })
})