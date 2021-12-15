const count = 2
let str = `123${count}`

// 'brace-style': ['error', '1tbs'],
try {
  str = '34234'
} catch (err) {}

//  'arrow-parens': ['error', 'as-needed'],
const fn = val => {
  return val.slice(1, 2)
}
fn(str)

// 'space-before-function-paren': ['error', { named: 'never' }],
const foo = function () {
  return 'name'
}

// 'operator-linebreak'
const state =
  str.length > 10
    ? str
    : `${str}3444444444444444444444444444433` +
      '333333333333333333333333333333333333'

// 'no-console': 'off',
console.log(foo, state)
