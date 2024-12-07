import { Link } from 'react-router-dom';

export function NoMatch() {
  return (
    <div>
      <h2>Oops! Página não encontrada!</h2>
      <p>
        <a href="/">Ir à página inicial</a>
      </p>
    </div>
  );
}
