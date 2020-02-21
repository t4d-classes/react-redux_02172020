import React, { useState } from 'react';

import { ToolHeader } from './ToolHeader';

export const ColorTool = (props) => {

  const [ colors, setColors ] = useState(props.colors.concat());

  const [ colorForm, setColorForm ] = useState({
    colorName: '',
  });

  const change = (e) => {
    setColorForm({
      ...colorForm,
      [ e.target.name ]: e.target.value,
    });
  };

  const addColor = () => {
    setColors(colors.concat(colorForm.colorName));

    setColorForm({
      colorName: '',
    });
  };

  return (
    <>
      <ToolHeader headerText="Color Tool" />
      <ul>
        {colors.map(color => <li key={color}>{color}</li>)}
      </ul>
      <form>
        <div>
          <label htmlFor="color-name-input">Color Name</label>
          <input type="text" id="color-name-input" name="colorName" value={colorForm.colorName} onChange={change} />
        </div>
        <button type="button" onClick={addColor}>Add Color</button>
      </form>
    </>
  );

};