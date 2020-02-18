import React from 'react';

export const SortColHeader = ({
  headerText,
  colName,
  onSort: sort,
  sortCol
}) => {

  return <th onClick={() => sort(colName)}>
    {headerText} {sortCol === colName && 'v'}
  </th>;

};
