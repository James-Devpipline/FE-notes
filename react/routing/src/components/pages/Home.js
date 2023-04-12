import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Hello from Home</h1>
      Visit the<Link to="/products">products page</Link>for more...
    </div>
  );
}
