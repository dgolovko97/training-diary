/** @type {import("prettier").Config} */
module.exports = {
  // будет добавлять ";" в конце объекта, созданном в стиле es5 и раньше
  trailingComma: 'es5',
  // будет добавлять в конце строки ";"
  semi: false,
  tabWidth: 2,
  // true - будет менять "" на ''
  singleQuote: true,
  jsxSingleQuote: true,
  // true - будет располагать "(" у JSX елемента на той же строке
  jsxBracketSameLine: true,
  // будет делать (x) => x
  arrowParens: 'always',
  // lf - установить \n в конце файла
  endOfLine: 'lf',
  // true - { foo: bar } default
  bracketSpacing: true,
  // будет переносить на новую строку если длина текущей больше 80 символов
  printWidth: 80,
  // always - всегда переносить текст по ширине печати
  proseWrap: 'always',
  // если внедрять в существующий проект притер, то использовать это свойство для постепенного форматирования файлов
  //requirePragma: true
}
