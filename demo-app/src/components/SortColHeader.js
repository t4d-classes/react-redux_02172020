import React from 'react';

export const SortColHeader = ({
  headerText,
  colName,
  onSort: sort,
  sortColName
}) => {

  return <th onClick={() => sort(colName)}>
    {headerText} {sortColName === colName && 'v'}
  </th>;

};
