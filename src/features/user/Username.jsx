import { useSelector } from "react-redux";

function Username() {
  const userName = useSelector((state) => state.user.name);
  return <span>{userName}</span>;
}

export default Username;
