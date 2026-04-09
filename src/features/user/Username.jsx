import { useSelector } from "react-redux";

function Username() {
  const userName = useSelector((state) => state.user.name);
  return <span className="text-golden-sand-200">{userName}</span>;
}

export default Username;
