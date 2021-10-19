import { React, useState, useEffect } from "react";
import "./quote.style.css";

const Quote = () => {
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");

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
      // console.log(data);
      const randomIndex = Math.floor(Math.random() * data.length);
      let author = data[randomIndex].title.rendered;
      let rawContent = data[randomIndex].content.rendered;
      let content = rawContent.replace(/(<([^>]+)>)/gi, "");
      setAuthor(author);
      setContent(content);
    }
    fetchRandomQuote();
  }, []);

  console.log(author, content);

  return (
    <div className="quote__container">
      <section className="quote--content">{content}</section>
      <section className="quote--author">
        <h3> - {author.toUpperCase()}</h3>
      </section>
    </div>
  );
};

export default Quote;
