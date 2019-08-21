import React from 'react';
import { BoldSpan } from '../components/styledComponents';
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
 * returns by default
 * Hello world (font-weight === 600)
 * for <bold>Hello world<bold>
 */
export function toFormattedBoldText(text, fontWeight = 600) {
  const splitedText = text.split('<bold>').filter(line => line !== '');
  const inTextBeginning = text.indexOf('<bold>') ? 1 : 0;
  return splitedText.map((line, index) => (
    // eslint-disable-next-line react/no-array-index-key
    <BoldSpan key={`${line}${index}`} fontWeight={index % 2 === inTextBeginning ? fontWeight : 'false'}>
      {toFormattedText(line)}
    </BoldSpan>
  ));
}
