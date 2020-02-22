import React, { useState } from 'react';

const { Provider, Consumer } = React.createContext(null);

export const ColorStore = ({ children }) => {

  const [ colors, setColors ] = useState(['blue','red','black','green','orange','white']);

  // map state to props and map dispatch to props
  const contextValue = {
    colors,
    onAppendColor: color => setColors(colors.concat(color)),
  };

  return <Provider value={contextValue}>
    {children}
  </Provider>;

};

export const connectToColorStore = (PresentationalComponent) => {
  return () => <Consumer>{value => <PresentationalComponent {...value} />}</Consumer>;
};
