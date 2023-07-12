/**
 * @see https://astexplorer.net/
 */
const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const generator = require('@babel/generator').default;
const types = require('@babel/types');

const fs = require('fs');
const path = require('path');

const fileName = path.join(__dirname, './source.tsx');

const source = fs.readFileSync(fileName, 'utf-8');

const ast = parser.parse(source, {
  plugins: ['typescript', 'jsx'],
});

traverse(ast, {
  CallExpression(path) {
    const result = generator(path.node.callee);
    if (['console.log', 'console.error'].includes(result.code)) {
      const { line, column } = path.node.loc.start;
      path.node.arguments.unshift(
        types.stringLiteral(`${fileName}:${line}:${column}`)
      );
    }
  },
});

const { code } = generator(ast, {});

console.log(code);
