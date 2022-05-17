const { strictEqual, strict } = require('assert');
const { makeTest, suite } = require('./utility/testLib.js');

const { html } = require('../src/parser.js');

suite(
  'html',
  makeTest(
    'Paired element with no content',
    () => {
      const dom = [
        'div',
        {},
        []
      ];
      strictEqual(html(dom), '<div ></div>')
    }
  ),
  makeTest(
    'Paired element with a string content',
    () => {
      const dom = [
        'div',
        {},
        ['hello']
      ];
      strictEqual(html(dom), '<div >hello</div>')
    }
  ),
  makeTest(
    'Paired element with attributes',
    () => {
      const dom = [
        'div',
        {
          class: 'some-class'
        },
        ['hello']
      ];
      strictEqual(html(dom), '<div class="some-class">hello</div>')
    }
  ),
  makeTest(
    'Self Closing element with attributes',
    () => {
      const dom = [
        'img',
        {
          class: 'some-class',
          src: 'img.jpg',
          alt: 'img'
        },
      ];
      strictEqual(html(dom), '<img class="some-class" src="img.jpg" alt="img" />')
    }
  )
);
