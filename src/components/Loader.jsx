import { DotLoader } from "react-spinners";

function Loader({ isPending, error }) {
  if (isPending) {
    return (
      <div className="flex h-screen items-center justify-center">
        <DotLoader />
      </div>
    );
  }

  if (error) {
    return <Error />;
  }
}

export default Loader;
