import { AuthContext } from "@/context/AuthProvider";
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import Button from "./Button";

const navItems = [
  { to: "/", text: "Home" },
  { to: "/about", text: "About" },
  { to: "/contact", text: "Contact" },
];

export default function Header() {
  const { isAuthenticated } = useContext(AuthContext)!;
  return (
    <header className="sticky top-0 z-50 shadow">
      <nav className="bg-stone-700 border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto">
          <Link to="/" className="flex items-center">
            <img
              src="/logo-2.png"
              className="h-12 mr-3"
              alt="Logo"
            />
          </Link>
          <div className="flex items-center lg:order-2">
            {isAuthenticated ? (
              <Button text="logout" />
            ) : (
              <Button text="log in" />
            )}
          </div>
          {isAuthenticated && (
            <div className="items-center justify-between w-full lg:flex lg:w-auto lg:order-1">
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                {navItems.map((item, index) => (
                  <li key={index}>
                    <NavLink
                      to={item.to}
                      className={({ isActive }) =>
                        `block py-2 pr-4 pl-3 duration-200 ${
                          isActive ? "text-orange-700" : "text-white"
                        } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                      }
                    >
                      {item.text}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
