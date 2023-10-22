import React, { useState, useEffect } from "react";

function App() {
  const [quoteData, setQuoteData] = useState(null);

  function getData() {
    fetch("https://api.adviceslip.com/advice")
      .then((res) => res.json())
      .then((data) => {
        if (data.slip) {
          setQuoteData(data.slip.advice);
        } else {
          console.error("API response format is not as expected.");
        }
      })
      .catch((error) => console.error(error));
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <button onClick={getData}>Get Advice</button>
      <div>
        {quoteData}
      </div>
    </>
  );
}

export default App;
