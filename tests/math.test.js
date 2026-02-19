const {
  add,
  subtract,
  multiply,
  divide,
  sumArray,
  average,
  max,
  min,
  isEven,
  factorial
} = require('../src/math')

describe('Basic operations', () => {
  test('add works', () => {
    expect(add(2, 3)).toBe(5)
  })

  test('subtract works', () => {
    expect(subtract(10, 4)).toBe(6)
  })

  test('multiply works', () => {
    expect(multiply(3, 4)).toBe(12)
  })

  test('divide works', () => {
    expect(divide(20, 5)).toBe(4)
  })

  test('add returns null if input contains non-number value', () => {
    expect(add(2, false)).toBe(null)
  })
  test('subtract returns null if input contains non-number value', () => {
    expect(subtract(2, false)).toBe(null)
  })
  test('multiply returns null if input contains non-number value', () => {
    expect(multiply(2, false)).toBe(null)
  })
  test('divide returns null if input contains non-number value', () => {
    expect(divide(2, false)).toBe(null)
  })

  test('divide by zero returns null', () => {
    expect(() => divide(10, 0)).toBe(null)
  })
})

describe('sumArray', () => {
  test('sums numbers', () => {
    expect(sumArray([1, 2, 3])).toBe(6)
  })

  test('empty array returns 0', () => {
    expect(sumArray([])).toBe(0)
  })

  test('returns null if not array', () => {
    expect(() => sumArray(123)).toBe(null)
  })
})

describe('average', () => {
  test('calculates average', () => {
    expect(average([10, 20])).toBe(15)
  })

  test('floating point result', () => {
    expect(average([1, 2])).toBeCloseTo(1.5)
  })

  test('empty array returns null', () => {
    expect(() => average([])).toBe(null)
  })
  
  test('not an array', () => {
    expect(() => average(false)).toBe(null)
  })

  test('Arrays containing non-number values return null', () => {
    expect(average([...data, false])).toBe(null)
  })
})

describe('min / max', () => {
  const data = [3, 7, 2, 9]

  test('max works', () => {
    expect(max(data)).toBe(9)
  })

  test('min works', () => {
    expect(min(data)).toBe(2)
  })
  test('Empty array returns null', () => {
    expect(min([])).toBe(null)
  })
  test('Arrays containing non-number values return null', () => {
    expect(min([...data, false])).toBe(null)
  })
})

describe('isEven', () => {
  test.each([
    [2, true],
    [3, false],
    [0, true],
    [-4, true],
    [-4.5, null],
    [null, null]
  ])('isEven(%i)', (input, expected) => {
    expect(isEven(input)).toBe(expected)
  })
})

describe('factorial', () => {
  test('5! = 120', () => {
    expect(factorial(5)).toBe(120)
  })

  test('0! = 1', () => {
    expect(factorial(0)).toBe(1)
  })

  test('negative returns null', () => {
    expect(() => factorial(-1)).toBe(null)
  })
})

