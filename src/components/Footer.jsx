import { Link } from "react-router";
function Footer() {
  return (
    <div className="text-md flex justify-between border-t-2 border-stone-700 bg-stone-800 px-4 py-4 font-semibold tracking-wider text-stone-100">
      <span>Total: 13$ </span>
      <Link to="/cart">Cart</Link>
    </div>
  );
}

export default Footer;
