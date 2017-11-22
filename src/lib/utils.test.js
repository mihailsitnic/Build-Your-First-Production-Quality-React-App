import {partial, pipe} from './utils'

const add = (a, b) => a + b
const addThree = (a, b, c) => a + b + c

test('partial applies the first argument ahead of time', () => {
  const inc = partial(add, 1)
  const result = inc(2)
  expect(result).tobe(3)
})

test('partial applies the multiple arguments ahead of time', () => {
  const inc = partial(addThree, 1, 3)
  const result = inc(2)
  expect(result).tobe(6)
})

test('pipe passes the results of inc to dbl', () => {
  const pipeLine = pipe(inc, dbl)
  const result = pipeLine(2)
  expect(result).toBe(6)
})

test('pipe passes the results of dbl to inc', () => {
  const pipeLine = pipe(dbl, inc)
  const result = pipeLine(2)
  expect(result).toBe(6)
})

test('pipe works widht more than 2 functions', () => {
  const pipeLine = pipe(add, inc, dbl, inc)
  const result = pipeLine(1, 2)
  expect(result).toBe(9)
})
