import { useSelector } from "react-redux";

function Username() {
  const { username } = useSelector((store) => store.user);

  if (!username) return;

  return (
    <div className="hidden items-center text-sm font-semibold md:block">
      {username}
    </div>
  );
}

export default Username;
