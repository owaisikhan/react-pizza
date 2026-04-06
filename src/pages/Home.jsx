import { useDispatch, useSelector } from "react-redux";
import Button from "../components/Button";
import { useNavigate } from "react-router";
import { addUser } from "../features/user/userSlice";
import { useState } from "react";

function Home() {
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const userName = useSelector((state) => state.user.name);
  const dispatch = useDispatch();
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(addUser(name));
    setName("");
    // console.log(e);
    navigate("/menu");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex h-full w-full items-center justify-center"
    >
      <div className="flex w-7/10 max-w-xl flex-col items-center gap-4 text-sm sm:text-xl md:text-2xl lg:text-3xl">
        <p className="font-bold tracking-wide uppercase">
          Welcome to react pizza {userName}
        </p>

        <div className="flex flex-col items-center justify-between gap-2">
          <input
            className="rounded-2xl border-2 px-4 py-3 transition-all duration-700 focus:w-full"
            type="text"
            placeholder="enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Button>Login</Button>
        </div>
      </div>
    </form>
  );
}

export default Home;
