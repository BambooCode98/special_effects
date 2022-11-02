const { expect } = require('expect')
const palindrome = require('./textprac')

test('check if word is an array', () => {
  expect(palindrome('string')).toBe('is array')
})