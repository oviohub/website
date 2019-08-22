import React from 'react';

/*
 * return <span>Hello <br/> world </span>
 * for "Hello \n world"
 * return <span>Hello world </span>
 * for "Hello world"
 */
export function toFormattedText(text) {
  const splitedText = text.split('\n');
  return splitedText.map((line, index) => (
    // eslint-disable-next-line react/no-array-index-key
    <span key={`${line}${index}`}>
      {line}
      {splitedText.length - 1 !== index && <br />}
    </span>
  ));
}
