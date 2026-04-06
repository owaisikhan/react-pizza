import { Link } from "react-router";
import Username from "../features/user/Username";

function Header() {
  return (
    <div className="flex items-center justify-between border-b border-stone-400 bg-amber-400 px-6 py-4 text-nowrap">
      <span className="space text-2xl tracking-wider uppercase">
        <Link to="/">REACT PIZZA Co.</Link>
      </span>
      <input
        type="text"
        placeholder="Search..."
        className="w-4/10 rounded-2xl border border-stone-400 bg-stone-200 px-4 py-2 text-sm transition-all duration-300 hover:border-stone-900 focus:w-1/2 focus:ring-1 focus:ring-amber-600/50 focus:ring-offset-2 focus:ring-offset-amber-400 focus:outline-none md:w-3/10 md:focus:w-1/2"
      />
      <span className="hidden text-2xl tracking-wider uppercase sm:block">
        <Username />
      </span>
    </div>
  );
}

export default Header;
