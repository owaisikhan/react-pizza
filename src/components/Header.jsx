import Username from "../features/user/Username";

function Header() {
  return (
    <div className="flex items-center justify-between border-b-2 border-stone-700 bg-amber-400 px-4 py-2 text-nowrap">
      <span className="space text-2xl uppercase">REACT PIZZA Co. </span>
      <input
        type="text"
        placeholder="Search..."
        className="w-1/3 rounded-2xl border px-2 py-1 text-sm transition-all duration-300 hover:border-stone-900 focus:w-1/2 focus:ring-1 focus:ring-amber-600 focus:ring-offset-2 focus:ring-offset-amber-400 focus:outline-none md:focus:w-1/2"
      />
      <span className="hidden sm:block">
        <Username />
      </span>
    </div>
  );
}

export default Header;
