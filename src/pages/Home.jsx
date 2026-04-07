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
      <div className="flex w-7/10 max-w-xl flex-col items-center gap-4 rounded-3xl bg-stone-100 py-16 text-sm shadow-lg shadow-stone-600 sm:text-xl md:py-32 md:text-2xl lg:text-3xl">
        <div className="flex h-14 w-14 items-center justify-center rounded-full border border-amber-100 bg-amber-50">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 2L2 20h20L12 2z"
              stroke="#f5a623"
              strokeWidth="1.5"
              strokeLinejoin="round"
              fill="#fff7e8"
            />
            <circle cx="9" cy="15" r="1.2" fill="#e05c2a" />
            <circle cx="13.5" cy="13" r="1.2" fill="#e05c2a" />
            <circle cx="11" cy="17.5" r="1.2" fill="#e05c2a" />
            <circle cx="14.5" cy="16.5" r="1" fill="#4caf50" />
            <circle cx="10" cy="13" r="1" fill="#4caf50" />
          </svg>
        </div>

        <div className="flex flex-col">
          <p className="font-bold tracking-wide uppercase">
            Welcome to react pizza {userName}
          </p>
          <p className="self-center text-sm">
            Enter your name to start ordering
          </p>
        </div>

        <div className="flex w-full flex-col items-center gap-2">
          <input
            // className="rounded-2xl border-2 px-4 py-3 transition-all duration-700 focus:w-full"
            className="w-7/10 rounded-xl border-[1.5px] border-stone-300 bg-stone-900 px-4 py-3 text-sm text-stone-200 transition-colors placeholder:text-stone-400 focus:border-blue-800 focus:outline-none"
            type="text"
            placeholder="enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Button type="login">Login</Button>
        </div>
      </div>
    </form>
  );
}

export default Home;
