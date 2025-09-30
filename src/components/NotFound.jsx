/**
 * This component displays when the route is invalid and
 * allows the user to return to the home page.
 */

import { Link } from "react-router";

export default function NotFound() {
  return (
    <>
      <header>Everyday English</header>
      <div className="error">
        <h2>Oh no! This link is broken.</h2>
        <Link to="/">Return to home page</Link>
      </div>
      <footer>Created by Denalia Zhi</footer>
    </>
  );
}
