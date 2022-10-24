import { Link } from 'react-router-dom';

function NotFoundScreen() {
  return (
    <main className="page__main page__main--index page__main--index-empty" style={{
      textAlign: 'center'
    }}
    >
      <h1 >Page not found
      </h1>
      <Link to="/">go back</Link>
    </main>
  );
}

export default NotFoundScreen;
