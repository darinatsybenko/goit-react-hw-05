import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      <h1>Ooops! 404 NotFound</h1>
      <Link to="/">GoHome</Link>
    </div>
  );
};

export default NotFoundPage;
