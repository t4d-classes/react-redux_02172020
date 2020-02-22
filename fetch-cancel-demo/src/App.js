import React, {useState} from 'react';

import { CarsTable } from './components/CarsTable';

function App() {

  const [showCars, setShowCars] = useState(false);

  const doShowCars = () => {

    setShowCars(true);


    setTimeout(() => {
      setShowCars(false);
    }, 5000);
  };

  return (
    <>
      <div>
        <button type="button" onClick={doShowCars}>Show Cars</button>
      </div>

      {showCars && <CarsTable />}
    </>
  );
}

export default App;
