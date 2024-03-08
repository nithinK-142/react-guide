import { Link } from "react-router-dom";

const navItems = [
  { to: "/", text: "Home" },
  { to: "/about", text: "About" },
  { to: "/products", text: "Products" },
  { to: "/contact", text: "Contact" },
];

export default function Navbar() {
  return (
    <nav className="p-10 fixed w-full z-[100]">
      <ul className="flex items-center justify-end gap-12">
        {navItems.map(({ text, to }) => (
          <li>
            <Link to={to} className="font-semibold text-black">
              {text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
