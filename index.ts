let crypto
try {
    crypto = require('crypto')
} catch (err) {
    console.error('crypto module not available.')
    throw err
}
const { randomBytes } = crypto

const ALPHANUM = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 'abcdefghijklmnopqrstuvwxyz' + '0123456789'

const idGenerator = (length = 15) => {
    if (length < 1) {
        throw new Error('Ids must be at least one character long.')
    }
    if (length < 15) {
        console.warn('Ids shorter than 15 characters are not recommended.')
    }

    let id = ''

    const random = randomBytes(length)

    let cursor = 0
    for (let i = 0; i < length; i += 1) {
        cursor += random[i]
        id += ALPHANUM[cursor % ALPHANUM.length]
    }

    return id
}

export default idGenerator
