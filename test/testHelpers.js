const { strictEqual } = require('assert');
const { makeTest, suite } = require('./utility/testLib.js');

const {
  openingTag,
  closingTag,
  stringifyStyle,
  stringifyAttributes
} = require('../src/helpers.js');

suite(
  'openingTag',
  makeTest(
    'Without attributes',
    () => strictEqual(openingTag('div'), '<div >')
  ),
  makeTest(
    'With attributes',
    () => {
      const attr = 'class="some-class"';
      strictEqual(openingTag('div', attr), '<div class="some-class">');
    }
  ),
  makeTest(
    'Empty tag',
    () => strictEqual(openingTag(''), '< >')
  )
);

suite(
  'closingTag',
  makeTest(
    'With tag',
    () => strictEqual(closingTag('div'), '</div>')
  ),
  makeTest(
    'Empty tag',
    () => strictEqual(closingTag(''), '</>')
  )
);

suite(
  'stringifyStyle',
  makeTest(
    'style with properties',
    () => {
      const style = {
        font: 'Arial',
        color: 'red'
      };
      strictEqual(stringifyStyle(style), 'font:Arial;color:red;');
    }
  ),
  makeTest(
    'style with no property',
    () => {
      const style = {};
      strictEqual(stringifyStyle(style), '');
    }
  )
);

suite(
  'stringifyAttributes',
  makeTest(
    'Without style attribute',
    () => {
      const attr = {
        class: 'some-class',
        id: 'some-id'
      };
      strictEqual(stringifyAttributes(attr), 'class="some-class" id="some-id"');
    }
  ),
  makeTest(
    'With style attribute',
    () => {
      const attr = {
        class: 'some-class',
        style: {
          font: 'Arial'
        }
      };
      strictEqual(stringifyAttributes(attr), 'class="some-class" style="font:Arial;"');
    }
  )
);
