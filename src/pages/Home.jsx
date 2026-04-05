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
      className="flex h-full items-center justify-center"
    >
      <div>
        <p className="mb-6 text-2xl font-bold tracking-wide uppercase">
          Welcome to react pizza %ammar
        </p>

        <div className="flex items-center justify-between">
          <input
            className="mx-2 w-1/2 rounded-2xl border-2 px-4 py-1 transition-all duration-700 focus:w-full"
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
