import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-wide">
          Manantial
        </h1>

        {/* Desktop menu */}
        <ul className="hidden md:flex gap-6 text-sm font-medium">
          <NavItem to="/">Inicio</NavItem>
          <NavItem to="/sermons">Sermones</NavItem>
          <NavItem to="/events">Eventos</NavItem>
          <NavItem to="/login" button >Login</NavItem>  
        </ul>

        {/* Mobile button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-3xl focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-slate-800 px-6 py-4 space-y-4">
          <MobileNavItem to="/" setOpen={setOpen}>Inicio</MobileNavItem>
          <MobileNavItem to="/sermons" setOpen={setOpen}>Sermones</MobileNavItem>
          <MobileNavItem to="/events" setOpen={setOpen}>Eventos</MobileNavItem>
          <MobileNavItem to="/login" setOpen={setOpen}>Login</MobileNavItem>
        </div>
      )}
    </nav>
  );
}

/* ================= COMPONENTES ================= */

function NavItem({ to, children, button }) {
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          button
            ? `
              px-4 py-1 rounded-full border
              ${isActive 
                ? "bg-yellow-400 text-black border-yellow-400" 
                : "border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black"}
              transition
            `
            : `
              ${isActive ? "text-yellow-400" : "text-white"}
              hover:text-yellow-400 transition
            `
        }
      >
        {children}
      </NavLink>
    </li>
  );
}


function MobileNavItem({ to, children, setOpen }) {
  return (
    <NavLink
      to={to}
      onClick={() => setOpen(false)}
      className="block text-lg hover:text-yellow-400 transition"
    >
      {children}
    </NavLink>
  );
}
