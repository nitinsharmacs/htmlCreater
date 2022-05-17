const {
  openingTag,
  closingTag,
  stringifyAttributes
} = require('./helpers.js');

const isSelfClosing = (tag) => {
  const selfClosingTags = ['img', 'link', 'hr', 'br'];
  return selfClosingTags.includes(tag);
};

const selfClosingTagHtml = (tag, attrs) => {
  return '<' + tag + ' ' + stringifyAttributes(attrs) + ' />';
};

const html = ([tag, attrs, contents]) => {
  if (isSelfClosing(tag)) {
    return selfClosingTagHtml(tag, attrs);
  }

  const newContent = contents.map(content => isArray(content) ? html(content) : content).join(' ');

  return openingTag(tag, stringifyAttributes(attrs)) + newContent + closingTag(tag);
};

exports.html = html;
