import { Link } from "react-router";

function Button({ children, onclick, to, type }) {
  const login =
    "w-7/10 bg-blue-300 hover:bg-blue-400 opacity-25 hover:opacity-100 rounded-xl py-3 text-sm font-medium text-stone-900 transition-all duration-300";

  const base =
    "text-md rounded-3xl border-2 border-amber-600 bg-amber-500 px-4 py-2 font-bold text-stone-800 hover:bg-amber-700 md:rounded-3xl md:p-3 md:text-sm";

  if (to) {
    return <Link to={to}>{children}</Link>;
  }
  return (
    <button
      onClick={onclick}
      type={type}
      className={type === "login" ? login : base}
    >
      {children}
    </button>
  );
}

export default Button;
