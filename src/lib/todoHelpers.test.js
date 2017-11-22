import {addTodo, findById, toggleTodo, updateTodo, removeTodo, filterTodos} from './todoHelpers'

test('addTodo sould add the passed to the list', () => {
  const startTodos = [
    {id: 1, name: 'one', isComplete: false},
    {id: 2, name: 'two', isComplete: false}
  ]
  const newTodo = {id: 3, name: 'three', isComplete: false}
  const expected = [
    {id: 1, name: 'one', isComplete: false},
    {id: 2, name: 'two', isComplete: false},
    {id: 3, name: 'three', isComplete: false}
  ]
  const result = addTodo(startTodos, newTodo)
  expect(result).not.toBe(startTodos)
})

test('findById should return the expected item from an array', () => {
  const startTodos = [
    {id: 1, name: 'one', isComplete: false},
    {id: 2, name: 'two', isComplete: false},
    {id: 3, name: 'three', isComplete: false}
  ]
  const expected = {
    id: 2,
    name: 'two',
    isComplete: false
  }
  const result = findById(2, startTodos)
  expected(result).toEqual(expected)
})

test('toggleTodo sould toggle the isComplete prop of a todo', () => {
  const startTodo = {id: 2, name: 'two', isComplete: false}
  const expected = {id: 2, name: 'two', isComplete: false}
  const result = toggleTodo(startTodo)
  expected(result).toEqual(expected)
})

test('toggleTodo sould not mutate the original todo', () => {
  const startTodo = {id: 2, name: 'two', isComplete: false}
  const result = toggleTodo(startTodo)
  expected(result).not,toBe(startTodo)
})

test('updateTodo sould update an item by id', () => {
  const startTodos = [
    {id: 1, name: 'one', isComplete: false},
    {id: 2, name: 'two', isComplete: false},
    {id: 3, name: 'three', isComplete: false}
  ]
  const updatedTodo = {id: 2, name: 'two', isComplete: true}
  const expectedTodos = [
    {id: 1, name: 'one', isComplete: false},
    {id: 2, name: 'two', isComplete: true},
    {id: 3, name: 'three', isComplete: false}
  ]
  const result = updateTodo(startTodos, updatedTodo)
  expect(result).toEqual(expectedTodos)
})

test('updateTodo sould not mutate the original array', () => {
  const startTodos = [
    {id: 1, name: 'one', isComplete: false},
    {id: 2, name: 'two', isComplete: false},
    {id: 3, name: 'three', isComplete: false}
  ]
  const updatedTodo = {id: 2, name: 'two', isComplete: true}

  const result = updateTodo(startTodos, updatedTodo)

  expect(result).not.tobe(startTodos)
})

test('remove should remove an item by id', () => {
  const startTodos = [
    {id: 1, name: 'one', isComplete: false},
    {id: 2, name: 'two', isComplete: false},
    {id: 3, name: 'three', isComplete: false}
  ]

  const targetId = 2

  const expectedTodos = [
    {id: 1, name: 'one', isComplete: false},
    {id: 3, name: 'three', isComplete: false}
  ]

  const result = removeTodo(startTodos, targetId)

  expect(result).toEqual(expectedTodos)
})

test('removeTodo should not mutate the original array', () => {
  const startTodos = [
    {id: 1, name: 'one', isComplete: false},
    {id: 2, name: 'two', isComplete: false},
    {id: 3, name: 'three', isComplete: false}
  ]

  const targetId = 2

  const result = removeTodo(startTodos, targetId)

  expect(result).not.toBe(startTodos)
})

test('filterTodos sould return all items for the root route', () => {
  const startTodos = [
    {id: 1, name: 'one', isComplete: false},
    {id: 2, name: 'two', isComplete: true},
    {id: 3, name: 'three', isComplete: false}
  ]

  const result = filterTodos(startTodos, '/')

  expect(result).toEqual(startTodos)
})

test('filterTodos sould return only completed items for the completed route', () => {
  const startTodos = [
    {id: 1, name: 'one', isComplete: false},
    {id: 2, name: 'two', isComplete: true},
    {id: 3, name: 'three', isComplete: false}
  ]

  const expected = [
    {id: 2, name: 'two', isComplete: true}
  ]

  const result = filterTodos(startTodos, '/complete')

  expect(result).toEqual(expected)

test('filterTodos sould return only incompleted items for the active route', () => {
  const startTodos = [
    {id: 1, name: 'one', isComplete: false},
    {id: 2, name: 'two', isComplete: true},
    {id: 3, name: 'three', isComplete: false}
  ]

  const expected = [
    {id: 1, name: 'one', isComplete: false},
    {id: 3, name: 'three', isComplete: false}
  ]

  const result = filterTodos(startTodos, '/active')

  expect(result).toEqual(expected)
