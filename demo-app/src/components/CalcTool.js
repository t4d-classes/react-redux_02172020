import React, { useState } from 'react';

export const CalcTool = ({
  result, history,
  onAdd: add,
  onSubtract: subtract,
  onClear: clear,
  onDeleteEntry: deleteEntry,
  noop
}) => {

  const [ num, setNum ] = useState(0);

  return <form>

    <div>
      Result: {result}
    </div>

    <div>
      <label htmlFor="num-input">Num</label>
      <input type="number" id="num-input" value={num}
        onChange={e => setNum(Number(e.target.value))} />
    </div>

    <div>
      <button type="button" onClick={() => add(num)}>+</button>
      <button type="button" onClick={() => subtract(num)}>-</button>
      <button type="button" onClick={() => clear()}>Clear</button>
      <button type="button" onClick={() => noop()}>Noop</button>
    </div>

    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        {history.map(entry => <tr key={entry.id}>
          <td>{entry.opName}</td>
          <td>{entry.opValue}</td>
          <td>
            <button type="button" onClick={() => deleteEntry(entry.id)}>
              X
            </button>
          </td>
        </tr>)}
      </tbody>
    </table>

  </form>

};