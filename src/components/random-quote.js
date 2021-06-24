import { useEffect, useState } from "react";
import { data } from "../data/quote";
import "./random-quote.css";

function getRandomQuoteDetails(files) {
  return files[Math.floor(Math.random() * files.length)];
}

function RandomQuote() {
  const [quote, setQuote] = useState({
    text: "",
    author: "",
    source: "",
  });

  useEffect(function () {
    const quoteDetails = getRandomQuoteDetails(data.quotes);
    const filename =
      process.env.PUBLIC_URL + "/data/quote/" + quoteDetails.filename;
    fetch(filename)
      .then((response) => response.text())
      .then((data) => {
        setQuote((quote) => ({
          ...quote,
          text: data,
          author: quoteDetails.author,
          source: quoteDetails.source,
        }));
      });
  }, []);

  return (
    <div className="quote">
      <p className="quote__text">{quote.text}</p>
      <p className="quote__author">{quote.author}</p>
      <p className="quote__source">{quote.source}</p>
    </div>
  );
}

export { RandomQuote };
