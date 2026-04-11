import { Link } from "react-router";

function Button({ children, onClick, to, type }) {
  const login =
    "w-7/10 bg-burnt-peach-500 cursor-pointer rounded-xl py-3 text-sm font-medium text-golden-sand-50 transition-all duration-300 ease-in-out hover:bg-burnt-peach-400 hover:-translate-y-1 hover:scale-105 active:scale-95 active:bg-burnt-peach-600 sm:text-xl";
  const none = "cursor-pointer";
  const base =
    "text-md rounded-3xl border-2 cursor-pointer border-burnt-peach-600 bg-burnt-peach-500 px-4 py-2 font-bold text-golden-sand-50 hover:bg-burnt-peach-400 transition-all duration-200 md:rounded-3xl md:p-3 md:text-sm";
  const small =
    "text-2xl rounded-md cursor-pointer border-1 border-burnt-peach-600 bg-burnt-peach-500 py-1 px-3.5 font-bold text-golden-sand-50 hover:bg-burnt-peach-400 transition-all duration-200 ";

  const back =
    " max-w-6/10 sm:max-w-5/10 md:max-w-3/10 lg:max-w-2/10 text-md border-burnt-peach-600 bg-burnt-peach-500 text-golden-sand-50 hover:bg-burnt-peach-400 flex cursor-pointer items-center  rounded-3xl border-2 px-4 py-2 font-bold transition-all duration-200 md:rounded-3xl md:p-3 md:text-sm justify-between";
  const className = {
    login,
    base,
    small,
    none,
    back,
  };

  if (to) {
    return (
      <Link to={to} className={type ? className[type] : base}>
        {children}
      </Link>
    );
  }
  return (
    <button onClick={onClick} className={type ? className[type] : base}>
      {children}
    </button>
  );
}

export default Button;
