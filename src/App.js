import React, { useState, useEffect } from "react";
import "./styles.css";
import "@fontsource/roboto/300.css";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const quotesApi = "https://api.quotable.io/random";

const App = () => {
  const [quote, setQuote] = useState([]);

  //Fetch quote from API
  const getQuote = () => {
    fetch(quotesApi)
      .then((response) => response.json())
      .then((data) => setQuote(data));
  };

  return (
    <div className="App">
      <h1>Random Quote</h1>
      <Typography variant="body1" gutterBottom>
        {quote}
      </Typography>
      <Button variant="outlined" onClick={getQuote}>
        New Quote
      </Button>
    </div>
  );
};

export default App;
