const SideBar = ({ show }) => {
  return (
    <div
      className={
        show
          ? "sidebar active w-[200px] h-[90vh] bg-green-500 "
          : "sidebar w-[200px] h-[90vh] bg-green-500 "
      }
    >
      <ul className="p-4">
        <li className="p-4 rounded-md">
          <a href="">Home</a>
        </li>
        <li className="p-4 rounded-md">
          <a href="">About me</a>
        </li>
        <li className="p-4 rounded-md">
          <a href="">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
