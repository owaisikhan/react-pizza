import { Link } from "react-router";

function Button({ children, onclick, to, type }) {
  if (to) {
    return <Link to={to}>{children}</Link>;
  }
  return (
    <button
      onClick={onclick}
      type={type}
      className="text-md rounded-3xl border-2 border-amber-600 bg-amber-500 px-4 py-2 font-bold text-stone-800 hover:bg-amber-700 md:rounded-3xl md:p-3 md:text-sm"
    >
      {children}
    </button>
  );
}

export default Button;
