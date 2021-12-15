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

// 'no-console': 'off',
console.log(foo)
