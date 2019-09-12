import React from 'react';
import { Tag } from '../components/styledComponents';

/*
 * return <span>Hello <br/> world </span>
 * for "Hello \n world"
 * return <span>Hello world </span>
 * for "Hello world"
 */
export function toFormattedText(text) {
  const splitText = text.split('\n');
  return splitText.map((line, index) => (
    // eslint-disable-next-line react/no-array-index-key
    <span key={`${line}${index}`}>
      {line}
      {splitText.length - 1 !== index && <br />}
    </span>
  ));
}

/*
 * return <Tag>toFormattedText(Hello world)</Tag>
 * for <Tag>Hello world<Tag>
 */
export function toFormattedTaggedText(text) {
  const splitText = text.split('<Tag>').filter(line => line !== '');
  const inTextBeginning = text.indexOf('<Tag>') ? 1 : 0;
  return splitText.map((line, index) => {
    if (index % 2 === inTextBeginning) {
      return (
        // eslint-disable-next-line react/no-array-index-key
        <Tag key={`${line}${index}`}>{toFormattedText(line)}</Tag>
      );
    }
    return toFormattedText(line);
  });
}
