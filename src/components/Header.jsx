import { Link } from "react-router";
import Username from "../features/user/Username";

function Header() {
  return (
    <div className="border-burnt-peach-700 bg-burnt-peach-800 text-golden-sand-100 flex items-center justify-between border-b px-6 py-4 text-nowrap">
      <span className="text-golden-sand-200 text-2xl tracking-wider uppercase">
        <Link to="/">REACT PIZZA Co.</Link>
      </span>
      <input
        type="text"
        placeholder="Search..."
        className="border-burnt-peach-600 bg-burnt-peach-700 text-golden-sand-100 placeholder:text-golden-sand-400 focus:border-golden-sand-400 w-4/10 rounded-2xl border px-4 py-2 text-sm transition-all duration-300 focus:w-1/2 focus:outline-none md:w-3/10 md:focus:w-1/2"
      />
      <span className="text-golden-sand-200 hidden text-2xl tracking-wider uppercase sm:block">
        <Username />
      </span>
    </div>
  );
}
export default Header;
