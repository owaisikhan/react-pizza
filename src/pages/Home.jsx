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
    navigate("/menu");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex h-full w-full items-center justify-center"
    >
      <div className="bg-mauve-bark-800 shadow-mauve-bark-950 m-auto flex size-7/10 max-w-2xl flex-col items-center justify-center gap-4 rounded-3xl text-sm shadow-lg sm:text-xl md:w-6/10 md:text-2xl lg:w-9/10 lg:text-3xl">
        <div className="border-golden-sand-300 bg-burnt-peach-700 shadow-mauve-bark-900 flex size-14 items-center justify-center rounded-full border shadow-2xl sm:size-25">
          <svg className="h-10 w-10 sm:size-18" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 2L2 20h20L12 2z"
              stroke="#e3d182"
              strokeWidth="1.5"
              strokeLinejoin="round"
              fill="#8a260f"
            />
            <circle cx="9" cy="15" r="1.2" fill="#fcc669" />
            <circle cx="13.5" cy="13" r="1.2" fill="#fcc669" />
            <circle cx="11" cy="17.5" r="1.2" fill="#fcc669" />
            <circle cx="14.5" cy="16.5" r="1" fill="#d9c259" />
            <circle cx="10" cy="13" r="1" fill="#d9c259" />
          </svg>
        </div>

        <div className="flex flex-col gap-1 text-center">
          <p className="text-golden-sand-100 font-bold tracking-wide uppercase">
            Welcome to react pizza {userName}
          </p>
          <p className="text-mauve-bark-300 text-sm sm:text-[18px]">
            Enter your name to start ordering
          </p>
        </div>

        <div className="flex w-7/10 flex-col items-center gap-2">
          <input
            className="border-mauve-bark-600 bg-mauve-bark-700 text-golden-sand-100 placeholder:text-mauve-bark-400 focus:border-golden-sand-400 mt-2 mb-4 w-full rounded-xl border-[1.5px] px-4 py-3 text-sm transition-colors focus:outline-none"
            type="text"
            placeholder="Enter Name...."
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
