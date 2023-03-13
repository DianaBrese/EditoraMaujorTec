import React from "react";
import { Link } from "react-router-dom";

const Catalogo = ({ livros }) => (
  <main className="principal">
    <h2>Categoria frontend</h2>
    <ol>
      {livros
        .filter((livros) => livros.categoria === "frontend")
        .map((livro) => (
          <li key={livro.id}>
            <Link to={`/livro/${livro.slug}`}>{livro.titulo}</Link>
          </li>
        ))}
    </ol>
    <h2>Categoria programação</h2>
    <ol>
      {livros
        .filter((livros) => livros.categoria === "programacao")
        .map((livro) => (
          <li key={livro.id}>
            <Link to={`/livro/${livro.slug}`}>{livro.titulo}</Link>
          </li>
        ))}
    </ol>
    <h2>Ctegoria design</h2>
    <ol>
      {livros
        .filter((livros) => livros.categoria === "design")
        .map((livro) => (
          <li key={livro.id}>
            <Link to={`/livro/${livro.slug}`}>{livro.titulo}</Link>
          </li>
        ))}
    </ol>
  </main>
);

export default Catalogo;
