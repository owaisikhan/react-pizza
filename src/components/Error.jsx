import { useRouteError } from "react-router";
import Button from "./Button";

function Error() {
  const error = useRouteError();
  return (
    <div className="bg-golden-sand-50 flex min-h-full flex-col items-center justify-center gap-6 py-20">
      <div className="flex flex-col items-center gap-3 text-center">
        <p className="text-burnt-peach-500 text-6xl font-bold">Oops!</p>
        <p className="text-mauve-bark-700 text-xl font-medium">
          Something went wrong
        </p>
        <p className="text-mauve-bark-500 max-w-md text-sm">
          {error.message || error.data}
        </p>
      </div>
      <Button to="/">Return Home Page</Button>
    </div>
  );
}

export default Error;
