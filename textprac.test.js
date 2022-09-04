const { expect } = require('expect')
const sum = require('./textprac')

test('add two numbers', () => {
  expect(sum(1,2)).toBe(3)
})