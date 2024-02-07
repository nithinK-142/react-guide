import { NavLink } from "react-router-dom";

const navItems = [
  { to: "/", text: "Home" },
  { to: "/about", text: "About" },
  { to: "/products", text: "Products" },
  { to: "/contact", text: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 shadow">
      <nav className="bg-stone-700 border-gray-200 px-4 lg:px-6 py-2.5">
        <ul className="flex flex-col justify-center mt-4 font-medium lg:flex-row lg:space-x-16 lg:mt-0">
          {navItems.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `block text-xl py-2 pr-4 pl-3 duration-200 ${
                    isActive ? "text-orange-700" : "text-white"
                  } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                }
              >
                {item.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
