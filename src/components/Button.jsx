import { Link } from "react-router";

function Button({ children, onclick, to, type }) {
  if (to) {
    return <Link to={to}>{children}</Link>;
  }
  return (
    <button onClick={onclick} type={type}>
      {children}
    </button>
  );
}

export default Button;
