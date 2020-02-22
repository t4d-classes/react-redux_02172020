import React from 'react';

import { ToolHeader, ItemList, ColorForm } from './components';

function App({ colors, onAppendColor }) {

  return <>
    <ToolHeader headerText="Color Tool" />
    <ItemList items={colors} />
    <ColorForm buttonText="Add Color" onSubmitColor={onAppendColor} />
  </>;
}

export default App;
