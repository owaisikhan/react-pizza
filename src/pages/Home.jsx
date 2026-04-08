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
      <div className="bg-slate-blue-700 shadow-slate-blue-950 m-auto flex size-7/10 max-w-xl flex-col items-center justify-center gap-4 rounded-3xl text-sm shadow-lg sm:text-xl md:w-6/10 md:text-2xl lg:w-9/10 lg:text-3xl">
        <div className="shadow-slate-blue-900 border-slate-blue-200 bg-slate-blue-100 flex size-14 items-center justify-center rounded-full border shadow-2xl sm:size-25">
          <svg className="h-10 w-10 sm:size-18" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 2L2 20h20L12 2z"
              stroke="#404a73"
              strokeWidth="1.5"
              strokeLinejoin="round"
              fill="#bfc3e5"
            />
            <circle cx="9" cy="15" r="1.2" fill="#404a73" />
            <circle cx="13.5" cy="13" r="1.2" fill="#404a73" />
            <circle cx="11" cy="17.5" r="1.2" fill="#404a73" />
            <circle cx="14.5" cy="16.5" r="1" fill="#757dc1" />
            <circle cx="10" cy="13" r="1" fill="#757dc1" />
          </svg>
        </div>

        <div className="flex flex-col gap-1 text-center">
          <p className="text-slate-blue-50 font-bold tracking-wide uppercase">
            Welcome to react pizza {userName}
          </p>
          <p className="text-slate-blue-300 text-sm sm:text-[18px]">
            Enter your name to start ordering
          </p>
        </div>

        <div className="flex w-7/10 flex-col items-center gap-2">
          <input
            className="border-slate-blue-600 bg-slate-blue-800 text-slate-blue-100 placeholder:text-slate-blue-500 focus:border-slate-blue-300 mt-2 mb-4 w-full rounded-xl border-[1.5px] px-4 py-3 text-sm transition-colors focus:outline-none"
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
