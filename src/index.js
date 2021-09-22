import React from "react";
import ReactDom from "react-dom";

import "./index.css";

import Book from "./booklist";
import { catalog } from "./Bookcatalog";
import Home from "./Home";

function BookList() {
  return (
    <section className="booklist">
      <div className="div">
        <Home />
      </div>
      {catalog.map((book) => {
        return <Book className="book" key={book.id} {...book} />;
      })}
    </section>
  );
}

ReactDom.render(<BookList />, document.getElementById("root"));
