import { Link } from 'react-router-dom';

export function NoMatch() {
  return (
    <div>
      <h2>Oops! Página não encontrada!</h2>
      <p>
        <Link to="/">Ir à página inicial</Link>
      </p>
    </div>
  );
}
