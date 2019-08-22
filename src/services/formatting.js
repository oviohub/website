import React from 'react';
import { Tag } from '../components/styledComponents';

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

/*
 * return <Tag>toFormattedText(Hello world)</Tag>
 * for <tag>Hello world<tag>
 */
export function toFormattedTaggedText(text) {
  const splitedText = text.split('<tag>').filter(line => line !== '');
  const inTextBeginning = text.indexOf('<tag>') ? 1 : 0;
  return splitedText.map((line, index) => {
    if (index % 2 === inTextBeginning) {
      return (
        // eslint-disable-next-line react/no-array-index-key
        <Tag key={`${line}${index}`}>{toFormattedText(line)}</Tag>
      );
    }
    return toFormattedText(line);
  });
}
