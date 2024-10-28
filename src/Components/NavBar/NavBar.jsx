import { useState } from "react";
import { IoCloseSharp, IoMenuSharp } from "react-icons/io5";
import Link from "../Link/Link";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/services", name: "Services" },
    { id: 4, path: "/contact", name: "Contact" },
    { id: 5, path: "/blog", name: "Blog" },
  ];

  return (
    <nav className="text-black bg-yellow-200 p-6">
      <div className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
        {open === true ? (
          <IoCloseSharp />
        ) : (
          <IoMenuSharp className="text-2xl " />
        )}
      </div>
      <ul
        className={`md:flex duration-1000 absolute md:static
        ${open ? "top-12" : "-top-60"}
        bg-yellow-200 px-6 `}
      >
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
