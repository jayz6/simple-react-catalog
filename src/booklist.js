import React from "react";

const Book = (props) => {
  const { img, title, author, sub } = props;
  return (
    <article className="book">
      <img src={img} alt="book" className="img" />
      <h1 className="h1">{title}</h1>
      <h4 className="h4">{author}</h4>
      <button type="button" className="button">
        <a href={sub}>BUY</a>
      </button>
    </article>
  );
};

export default Book;
