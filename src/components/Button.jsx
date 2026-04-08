import { Link } from "react-router";

function Button({ children, onClick, to, type }) {
  // const login =
  //   "w-7/10 bg-blue-300 hover:bg-slate-blue-500 opacity-25 hover:opacity-100 rounded-xl py-3 text-sm font-medium text-stone-900 transition-all duration-300 hover:shadow-lg hover:shadow-blue-400/50 transition-[10] delay-150 duration-300 ease-in-out hover:-translate-y-2 hover:scale-110 hover:bg-blur-400";

  const login =
    "w-7/10 bg-slate-blue-500 rounded-xl py-3 text-sm font-medium text-slate-blue-50 transition-all duration-300 ease-in-out hover:bg-slate-blue-400 hover:-translate-y-1 hover:scale-105 hover:shadow-lg hover:shadow-slate-blue-950/60 active:scale-95 active:bg-slate-blue-600 sm:text-xl md:2xl";
  // const base =
  // "text-md rounded-3xl border-2 border-amber-600 bg-amber-500 px-4 py-2 font-bold text-stone-800 hover:bg-amber-700 md:rounded-3xl md:p-3 md:text-sm";

  const base =
    "text-md rounded-3xl border-2 border-slate-blue-500 bg-slate-blue-600 px-4 py-2 font-bold text-slate-blue-50 hover:bg-slate-blue-500 md:rounded-3xl md:p-3 md:text-sm";

  if (to) {
    return <Link to={to}>{children}</Link>;
  }
  return (
    <button onClick={onClick} className={type === "login" ? login : base}>
      {children}
    </button>
  );
}

export default Button;
