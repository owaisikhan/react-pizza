import { Link } from "react-router";
import Username from "../features/user/Username";

function Header() {
  return (
    <div className="border-slate-blue-600 bg-slate-blue-900 text-slate-blue-100 flex items-center justify-between border-b px-6 py-4 text-nowrap">
      <span className="space text-2xl tracking-wider uppercase">
        <Link to="/">REACT PIZZA Co.</Link>
      </span>
      <input
        type="text"
        placeholder="Search..."
        className="border-slate-blue-600 bg-slate-blue-800 text-slate-blue-200 hover:border-slate-blue-400 focus:ring-slate-blue-400/50 focus:ring-offset-slate-blue-900 w-4/10 rounded-2xl border px-4 py-2 text-sm transition-all duration-300 focus:w-1/2 focus:ring-1 focus:ring-offset-2 focus:outline-none md:w-3/10 md:focus:w-1/2"
      />
      <span className="hidden text-2xl tracking-wider uppercase sm:block">
        <Username />
      </span>
    </div>
  );
}
export default Header;
