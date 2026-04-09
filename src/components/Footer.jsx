import { Link } from "react-router";
function Footer() {
  return (
    <div className="border-burnt-peach-700 bg-burnt-peach-800 text-md text-golden-sand-100 flex items-center justify-between border-t-2 px-4 py-4 font-semibold tracking-wider">
      <span>Total: 13$</span>
      <Link to="/cart">
        <div className="text-golden-sand-200 hover:text-golden-sand-400 flex items-center gap-2 transition-colors duration-200">
          <div className="border-golden-sand-400 bg-burnt-peach-700 size-[28px] rounded-full border">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <path
                d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"
                stroke="#e3d182"
                strokeWidth="1.5"
                strokeLinejoin="round"
                fill="#5c190a"
              />
              <path
                d="M3 6h18"
                stroke="#e3d182"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M16 10a4 4 0 01-8 0"
                stroke="#e3d182"
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
