import React, { useState } from 'react';

export const ColorForm = ({ buttonText, onSubmitColor }) => {

  const [ colorInput, setColorInput ] = useState('');

  const change = (e) => {
    setColorInput(e.target.value);
  };  

  return <form>
    <div>
      <label htmlFor="color-input">Color</label>
      <input type="text" id="color-input" value={colorInput} onChange={change} />
    </div>
    <button type="button" onClick={() => onSubmitColor(colorInput)}>{buttonText}</button>
  </form>;

};