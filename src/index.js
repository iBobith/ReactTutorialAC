import ReactDOM from "react-dom/client";
import "./index.css";

const books = [
  {
    author: "Virginia Roberts Giuffre",
    title: "Nobody's Girl",
    img: "./images/book-1.jpg",
    id: 1,
  },
  {
    author: "Andrew Ross Sorkin",
    title: "1929",
    img: "./images/book-2.jpg",
    id: 2,
  },
];

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} {...book} />;
      })}
    </section>
  );
}

const Book = ({ title, author, img }) => {
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
