export default function Bookslider({ books, selected, setSelected }) {
  function handleSelect(book) {
    setSelected(book);
  }
  return (
    <div className="text-center pt-16">
      Books
      <ul className="">
        {books.map((book, index) => (
          <li
            key={index}
            onClick={() => handleSelect(book)}
            className={`cursor-pointer inline-block ${
              book === selected ? "text-red-500" : ""
            }`}
          >
            {book.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
