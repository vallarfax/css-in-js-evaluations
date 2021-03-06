import React from 'react';
import {css} from 'emotion';

const className = css`
  margin-bottom: 10px;

  color: black;
  font-family: sans-serif;
  font-size: 16px;
  line-height: 22px;
  font-weight: normal;
`;

export default ({name}) => <div className={className}>{name}</div>;

