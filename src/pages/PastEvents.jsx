import React, { useState } from 'react';

const PastEvents = () => {
  const [showPIW2023, setShowPIW2023] = useState(false);
  const [showPIW2022, setShowPIW2022] = useState(false);

  return (
    <div>
      <div>
        <button onClick={() => setShowPIW2023(!showPIW2023)}>PIW 2023</button>
        {showPIW2023 && <p>Content for PIW 2023</p>}
      </div>

      <div>
        <button onClick={() => setShowPIW2022(!showPIW2022)}>PIW 2022</button>
        {showPIW2022 && <p>Content for PIW 2022</p>}
      </div>
    </div>
  );
};

export default PastEvents;
