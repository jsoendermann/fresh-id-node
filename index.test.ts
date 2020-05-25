import freshId from '.'

describe('fresh-id-node', () => {
    it('should create correct ids', () => {
        expect(freshId(20)).toMatch(/^[a-zA-Z0-9]{20}$/)
        expect(freshId(100)).toMatch(/^[a-zA-Z0-9]{100}$/)
        expect(freshId()).toMatch(/^[a-zA-Z0-9]{15}$/)
    })

    it('should log a warning when creating ids with < 15 chars.', () => {
        const warn = jest.spyOn(console, 'warn').mockImplementation(jest.fn())

        freshId(10)

        expect(warn).toHaveBeenCalledTimes(1)
        expect(warn).toHaveBeenLastCalledWith('Ids shorter than 15 characters are not recommended.')
    })

    it('should not create empty ids', () => {
        expect(() => freshId(0)).toThrow(new Error('Ids must be at least one character long.'))
    })
})
