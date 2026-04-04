import { useRouteError } from "react-router";
import Button from "./Button";

function Error() {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <p>
        Error boundery message
        {error.message || error.data}
      </p>

      <Button to="/">Return Home Page</Button>
      <Button>Return Home Page</Button>
    </div>
  );
}

export default Error;
