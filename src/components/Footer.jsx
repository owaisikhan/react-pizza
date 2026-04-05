import { Link } from "react-router";
function Footer() {
  return (
    <div className="flex justify-between border-t-2 border-stone-700 bg-stone-800 px-4 py-2 text-stone-100">
      <span>Total: 13$ </span>
      <Link to="/cart">Cart</Link>
    </div>
  );
}

export default Footer;
