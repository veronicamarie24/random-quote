import React, { useState, useEffect } from "react";
import "./styles.css";
import "@fontsource/roboto/300.css";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const App = () => {
  const quotesApi = "https://api.quotable.io/random";
  const [quote, setQuote] = useState([]);

  //Fetch quote from API
  const getQuote = () => {
    fetch(quotesApi)
      .then((response) => response.json())
      .then((data) => setQuote(data));
  };

  useEffect(() => {
    getQuote();
  }, [quotesApi]);
  // we don't want to leave the dependency array empty
  // it could make debugging more difficult

  console.log(quote);
  const { content, author } = quote;

  return (
    <div className="App">
      <h1>Random Quote</h1>
      <Typography variant="body1" gutterBottom>
        {content}
      </Typography>
      <Typography variant="caption" display="block" gutterBottom>
        - <span style={{ fontWeight: "bold" }}>{author}</span>
      </Typography>
      <Button variant="outlined" onClick={getQuote} sx={{ mt: 3 }}>
        New Quote
      </Button>
    </div>
  );
};

export default App;
