import React, { useState } from 'react';

export const ColorTool = (props) => {

  const [ colors, setColors ] = useState(props.colors.concat());

  const [ colorForm, setColorForm ] = useState({
    colorName: '',
    colorHexcode: '',
  });

  const change = (e) => {
    setColorForm({
      ...colorForm,
      // colorName: e.target.value,
      [ e.target.name ]: e.target.value,
    });
  };

  const addColor = () => {
    setColors(colors.concat(colorForm.colorName));

    setColorForm({
      colorName: '',
      colorHexcode: '',
    });
  };

  return (
    <>
      <header>
        <h1>Color Tool</h1>
      </header>
      <ul>
        {props.colors.map(color => <li key={color}>{color}</li>)}
      </ul>
      <form>
        <div>
          {/* React.createElement('label', { htmlFor: 'color-name-input' }, 'Color Name') */}
          <label htmlFor="color-name-input">Color Name</label>
          <input type="text" id="color-name-input" name="colorName" value={colorForm.colorName} onChange={change} />
        </div>
        <div>
          <label htmlFor="color-hexcode-input">Color Hexcode</label>
          <input type="text" id="color-hexcode-input" name="colorHexcode" value={colorForm.colorHexcode} onChange={change} />
        </div>
        <button type="button" onClick={addColor}>Add Color</button>
      </form>
    </>
  );

};