import { React, useState, useEffect } from "react";
import "./quote.style.css";

const Quote = () => {
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [hovered, setHovered] = useState(false);

  // Create random number for the index of quotes
  const getRandomNumber = (min, max) => {
    min = Math.ceil(10900);
    max = Math.floor(11000);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  useEffect(() => {
    async function fetchRandomQuote() {
      let quoteUrl = `https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand&_=${getRandomNumber}`;

      const response = await fetch(quoteUrl);
      const data = await response.json();
      // Make sure only one quote is returned at a time.
      const randomIndex = Math.floor(Math.random() * data.length);
      let author = data[randomIndex].title.rendered;
      let rawContent = data[randomIndex].content.rendered;
      // TODO: Get rid of any weird characters in the quote but allow for certain types (ie: &)
      let regex = /( |<([^>]+)>)/gi;
      let content = rawContent.replace(regex, " ");
      setAuthor(author);
      setContent(content);
    }
    fetchRandomQuote();
  }, []);

  const toggleHover = () => {
    setHovered(!hovered);
  };

  return (
    <div
      className="quote__container"
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
    >
      <section className="quote--content">{content}</section>
      <section className={hovered ? "quote--author" : "quote--author--hover"}>
        <span>
          {" "}
          <b>-</b> {author.toUpperCase()}
        </span>
      </section>
    </div>
  );
};

export default Quote;
