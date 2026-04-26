import { Link, useNavigate } from "react-router";
import Username from "../features/user/Username";
import { useState } from "react";

function Header() {
  const navigate = useNavigate();
  const [idEntered, setIdEntered] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    navigate(`/order/${idEntered}`);
    // Clear the input field after navigation and alos unfoccus the input field after submiting the form

    setIdEntered("");
    e.target.querySelector("input").blur(); //this will unfocus the input field after submiting the form
  }
  return (
    <div className="border-burnt-peach-700 bg-burnt-peach-800 text-golden-sand-100 flex items-center justify-between border-b px-6 py-4 text-nowrap">
      <span className="text-golden-sand-200 text-2xl tracking-wider uppercase">
        <Link to="/">REACT PIZZA Co.</Link>
      </span>

      <form
        onSubmit={handleSubmit}
        className="border-burnt-peach-600 bg-burnt-peach-700 text-golden-sand-100 placeholder:text-golden-sand-400 focus-within:border-golden-sand-400 w-4/10 rounded-2xl border px-4 py-2 text-sm transition-all duration-300 focus-within:w-1/2 focus-within:outline-none md:w-3/10 md:focus-within:w-1/2"
      >
        <input
          type="text"
          placeholder="Search..."
          value={idEntered}
          onChange={(e) => setIdEntered(e.target.value)}
          className="w-full outline-none"
        />
      </form>
      <span className="text-golden-sand-200 hidden text-2xl tracking-wider uppercase sm:block">
        <Username />
      </span>
    </div>
  );
}
export default Header;
