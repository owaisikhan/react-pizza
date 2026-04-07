import { Link } from "react-router";
function Footer() {
  return (
    <div className="text-md flex items-center justify-between border-t-2 border-stone-700 bg-stone-800 px-4 py-4 font-semibold tracking-wider text-stone-100">
      <span>Total: 13$ </span>

      <Link to="/cart">
        <div className="flex items-center gap-2">
          <div className="size-\[28px\] rounded-full border border-amber-200 bg-stone-200">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <path
                d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"
                stroke="#f5a623"
                strokeWidth="1.5"
                strokeLinejoin="round"
                fill="#fff7e8"
              />
              <path
                d="M3 6h18"
                stroke="#f5a623"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M16 10a4 4 0 01-8 0"
                stroke="#f5a623"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <span>View Cart</span>
        </div>
      </Link>
    </div>
  );
}

export default Footer;
