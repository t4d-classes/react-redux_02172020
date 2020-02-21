import React from 'react';

// - the first parameter of a component is referred to as props
// and it contains all of the values passed in as attributes
// to the component
// - the name of the props properties correspond to the attribute
// names
export const ToolHeader = (props) => {

  return <header>
    <h1>{props.headerText}</h1>
  </header>;
};