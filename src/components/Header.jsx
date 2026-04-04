import Username from "../features/user/Username";

function Header() {
  return (
    <div>
      <span>REACT PIZZA Co. </span>
      <input type="text" placeholder="Search..." />
      <Username />
    </div>
  );
}

export default Header;
