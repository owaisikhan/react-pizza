import Button from "../components/Button";
import { useNavigate } from "react-router";

function Home() {
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    navigate("/menu");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex h-full w-full items-center justify-center text-sm"
    >
      <div className="flex w-7/10 max-w-xl flex-col gap-4">
        <p className="text-xl font-bold tracking-wide uppercase md:text-3xl">
          Welcome to react pizza %ammar
        </p>

        <div className="flex w-full items-center justify-between gap-2">
          <input
            className="w-7/10 rounded-2xl border-2 px-4 py-3 transition-all duration-700 focus:w-full"
            type="text"
            placeholder="enter name"
          />
          <Button>Login</Button>
        </div>
      </div>
    </form>
  );
}

export default Home;
