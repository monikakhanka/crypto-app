import { Link, Outlet } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav className="h-20 bg-blue-500 text-white font-medium text-2xl">
        <div className="flex justify-between items-center h-full px-6">
          <ul className="flex gap-16">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/trade">Trade</Link>
            </li>
          </ul>

          <ul>
            <li>
              <Link to="/login">Log in</Link>
            </li>
          </ul>
        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default Header;
