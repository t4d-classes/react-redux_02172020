import React, { useState } from 'react';

export const ColorTool = (props) => {

  const [ colorForm, setColorForm ] = useState({
    colorName: '',
    colorHexcode: '',
  });

  const change = (e) => {

    console.log('calling change');

    // setColorForm({
    //   ...colorForm,
    //   // colorName: e.target.value,
    //   [ e.target.name ]: e.target.value,
    // });

  };

  console.log('re-rendering');
  console.log(colorForm);

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
        <button>Add Color</button>
      </form>

    </>
  );

};