import ReactDOM from "react-dom/client";
import "./index.css";
import { books } from "./books.js";
import { Book } from "./Book.js";

function BookList() {
  return (
    <>
      <h1>Amazon Best Sellers</h1>
      <section className="booklist">
        {books.map((book, index) => {
          return <Book key={book.id} {...book} number={index + 1} />;
        })}
      </section>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
