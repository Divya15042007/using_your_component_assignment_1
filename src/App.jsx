import React from "react";
import BookCard from "./components/BookCard";
import "./App.css";

const books = [
  {
    title: "The Night Circus",
    author: "Erin Morgenstern ",
    description: "A magical tale of a mysterious circus that appears without warning, where two young illusionists compete in a deadly game.",
    price: 10.99,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLOEsClK2n1Y57-uucbUv3xSG27jJ9WghSdw&s"
  },
  {
    title: "The Hitchhiker's Guide to the Galaxy",
    author: "Douglas Adams ",
    description: "A hilarious space adventure following Arthur Dent as he travels the cosmos after Earth's destruction.",
    price: 12.49,
    image: "https://m.media-amazon.com/images/I/81iGFQHtgqL._AC_UF894,1000_QL80_.jpg"
  },
  {
    title: "The Girl with the Dragon Tattoo",
    author: "Stieg Larsson",
    description: "A gripping story of a journalist and a hacker uncovering dark secrets in a wealthy family.",
    price: 15.78,
    image: "https://m.media-amazon.com/images/I/81YW99XIpJL._UF1000,1000_QL80_.jpg"
  }
];

const App = () => {
  return (
    <div className="app-container">
      <h1 className="app-heading">Virtual Knowledge Repository</h1>
      <div className="book-list">
        {books.map((book, index) => (
          <BookCard key={index} book={book} />
        ))}
      </div>
    </div>
  );
};

export default App;
