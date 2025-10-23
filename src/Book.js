export const Book = ({ title, author, img, number }) => {
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
      <span className="number">{"#" + number}</span>
    </article>
  );
};
