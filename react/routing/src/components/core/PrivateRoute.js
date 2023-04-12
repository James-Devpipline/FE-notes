import { Route } from "react-router-dom";

export default function PrivateRoute(props) {
  const role = "guest";

  if (props.roles.includes(role)) {
    return <Route {...props} />;
  } else {
    return <h1>Not Found</h1>;
  }
}
