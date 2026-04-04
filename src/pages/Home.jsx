import Button from "../components/Button";
import { useNavigate } from "react-router";
function Home() {
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    navigate("/menu");
  }
  return (
    <form onSubmit={handleSubmit}>
      <p>Welcome to react pizza %ammar</p>
      <input type="text" placeholder="enter name" />

      <Button>Login</Button>
    </form>
  );
}

export default Home;
