import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Phone, Mail, Facebook, Instagram, Youtube, MapPin, Clock } from "lucide-react";
import logo from "../assets/logo.png";

export default function Navbar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location]);

  return (
    <>
      {/* Top Bar - Info rápida */}
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="hidden lg:block bg-gradient-to-r from-blue-900 to-purple-900 text-white py-2 px-6 fixed top-0 left-0 w-full z-[60]"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between text-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 hover:text-yellow-400 transition-colors cursor-pointer">
              <Clock className="w-4 h-4" />
              <span>Domingos 10:00 AM & 6:00 PM</span>
            </div>
            <div className="flex items-center gap-2 hover:text-yellow-400 transition-colors cursor-pointer">
              <MapPin className="w-4 h-4" />
              <span>Ciudad, País</span>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <a href="tel:+52000000000" className="flex items-center gap-2 hover:text-yellow-400 transition-colors">
              <Phone className="w-4 h-4" />
              <span>+52 000 000 0000</span>
            </a>
            <div className="w-px h-4 bg-white/30"></div>
            <div className="flex items-center gap-3">
              <motion.a
                href="#"
                whileHover={{ scale: 1.2, color: "#FBBF24" }}
                className="hover:text-yellow-400 transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.2, color: "#FBBF24" }}
                className="hover:text-yellow-400 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.2, color: "#FBBF24" }}
                className="hover:text-yellow-400 transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </motion.a>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Navbar */}
      <motion.nav
        className={`fixed lg:top-[40px] top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-slate-900/95 backdrop-blur-lg shadow-2xl"
            : "bg-slate-900/90 backdrop-blur-md"
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      >
        <div className="max-w-7xl mx-auto h-[80px] px-6 flex items-center justify-between">
          {/* Logo con efecto */}
          <NavLink to="/" className="flex items-center gap-3 group">
            <motion.div
              whileHover={{ scale: 1.05, rotate: [0, -5, 5, 0] }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-yellow-400/20 rounded-full blur-xl group-hover:bg-yellow-400/40 transition-all"></div>
              <img
                src={logo}
                alt="Manantial de Vida"
                className="h-12 object-contain relative z-10"
              />
            </motion.div>
            <div className="hidden md:block">
              <div className="text-lg font-bold text-white group-hover:text-yellow-400 transition-colors">
                Manantial de Vida
              </div>
              <div className="text-xs text-gray-400">Iglesia Cristiana</div>
            </div>
          </NavLink>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex gap-1 items-center text-sm font-semibold">
            <NavItem to="/" current={location.pathname}>
              Inicio
            </NavItem>
            <NavItem to="/sermons" current={location.pathname}>
              Sermones
            </NavItem>
            
            {/* Dropdown Menu */}
            <li 
              className="relative"
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            >
              <button className="px-4 py-2 text-white hover:text-yellow-400 transition-colors flex items-center gap-1 group">
                <span>Ministerios</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${showDropdown ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {showDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-100"
                  >
                    <div className="py-2">
                      <DropdownItem to="/ministries/kids">👶 Niños</DropdownItem>
                      <DropdownItem to="/ministries/youth">🙌 Jóvenes</DropdownItem>
                      <DropdownItem to="/ministries/women">👩 Mujeres</DropdownItem>
                      <DropdownItem to="/ministries/men">👨 Hombres</DropdownItem>
                      <DropdownItem to="/ministries/groups">📖 Grupos de Vida</DropdownItem>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>

            <NavItem to="/events" current={location.pathname}>
              Eventos
            </NavItem>
            <NavItem to="/about" current={location.pathname}>
              Nosotros
            </NavItem>
            <NavItem to="/contact" current={location.pathname}>
              Contacto
            </NavItem>
            
            {/* Live Button with pulse */}
            <li>
              <NavLink
                to="/live"
                className="ml-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-red-500 to-red-600 text-white font-bold hover:from-red-600 hover:to-red-700 transition-all shadow-lg hover:shadow-xl flex items-center gap-2 group relative overflow-hidden"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                </span>
                <span className="relative z-10">En Vivo</span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform"></div>
              </NavLink>
            </li>

            {/* Donation Button */}
            <li>
              <motion.a
                href="/donate"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="ml-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold hover:from-yellow-500 hover:to-yellow-600 transition-all shadow-lg hover:shadow-xl relative overflow-hidden group"
              >
                <span className="relative z-10">💝 Donar</span>
                <div className="absolute inset-0 bg-yellow-600/20 translate-x-full group-hover:translate-x-0 transition-transform"></div>
              </motion.a>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setOpen(!open)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg bg-yellow-400/10 hover:bg-yellow-400/20 transition-colors"
          >
            <AnimatePresence mode="wait">
              {open ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6 text-yellow-400" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6 text-yellow-400" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden bg-gradient-to-br from-slate-800 to-slate-900 border-t border-white/10 overflow-hidden"
            >
              <div className="px-6 py-6 space-y-1 max-h-[calc(100vh-120px)] overflow-y-auto">
                <MobileNavItem to="/" setOpen={setOpen} icon="🏠">
                  Inicio
                </MobileNavItem>
                <MobileNavItem to="/sermons" setOpen={setOpen} icon="🎤">
                  Sermones
                </MobileNavItem>
                
                {/* Mobile Dropdown */}
                <div className="space-y-1">
                  <div className="text-gray-400 text-sm font-semibold px-4 py-2">
                    Ministerios
                  </div>
                  <MobileNavItem to="/ministries/kids" setOpen={setOpen} icon="👶" subitem>
                    Niños
                  </MobileNavItem>
                  <MobileNavItem to="/ministries/youth" setOpen={setOpen} icon="🙌" subitem>
                    Jóvenes
                  </MobileNavItem>
                  <MobileNavItem to="/ministries/women" setOpen={setOpen} icon="👩" subitem>
                    Mujeres
                  </MobileNavItem>
                  <MobileNavItem to="/ministries/men" setOpen={setOpen} icon="👨" subitem>
                    Hombres
                  </MobileNavItem>
                  <MobileNavItem to="/ministries/groups" setOpen={setOpen} icon="📖" subitem>
                    Grupos de Vida
                  </MobileNavItem>
                </div>

                <MobileNavItem to="/events" setOpen={setOpen} icon="📅">
                  Eventos
                </MobileNavItem>
                <MobileNavItem to="/about" setOpen={setOpen} icon="ℹ️">
                  Nosotros
                </MobileNavItem>
                <MobileNavItem to="/contact" setOpen={setOpen} icon="📞">
                  Contacto
                </MobileNavItem>

                {/* Mobile CTA Buttons */}
                <div className="pt-4 space-y-3">
                  <NavLink
                    to="/live"
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-center gap-2 w-full px-6 py-3 rounded-full bg-gradient-to-r from-red-500 to-red-600 text-white font-bold shadow-lg"
                  >
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                    </span>
                    Ver en Vivo
                  </NavLink>
                  
                  <NavLink
                    to="/donate"
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-center gap-2 w-full px-6 py-3 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold shadow-lg"
                  >
                    💝 Donar
                  </NavLink>
                </div>

                {/* Mobile Contact Info */}
                <div className="pt-6 border-t border-white/10 space-y-3">
                  <a href="tel:+52000000000" className="flex items-center gap-3 text-gray-300 hover:text-yellow-400 transition-colors px-4 py-2">
                    <Phone className="w-5 h-5" />
                    <span>+52 000 000 0000</span>
                  </a>
                  <a href="mailto:contacto@manantialdevida.com" className="flex items-center gap-3 text-gray-300 hover:text-yellow-400 transition-colors px-4 py-2">
                    <Mail className="w-5 h-5" />
                    <span>contacto@manantialdevida.com</span>
                  </a>
                </div>

                {/* Mobile Social */}
                <div className="flex items-center justify-center gap-6 pt-4">
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.2 }}
                    className="text-gray-400 hover:text-yellow-400 transition-colors"
                  >
                    <Facebook className="w-6 h-6" />
                  </motion.a>
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.2 }}
                    className="text-gray-400 hover:text-yellow-400 transition-colors"
                  >
                    <Instagram className="w-6 h-6" />
                  </motion.a>
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.2 }}
                    className="text-gray-400 hover:text-yellow-400 transition-colors"
                  >
                    <Youtube className="w-6 h-6" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}

/* ================= COMPONENTES ================= */

function NavItem({ to, children, current }) {
  const isActive = current === to;

  return (
    <li className="relative">
      <NavLink
        to={to}
        className={`px-4 py-2 rounded-lg transition-all ${
          isActive
            ? "text-yellow-400"
            : "text-white hover:text-yellow-400 hover:bg-white/5"
        }`}
      >
        <motion.span
          whileHover={{ y: -2 }}
          className="inline-block"
        >
          {children}
        </motion.span>

        {/* Active indicator */}
        {isActive && (
          <motion.span
            layoutId="navbar-active"
            className="absolute left-1/2 -translate-x-1/2 -bottom-1 h-1 w-1 rounded-full bg-yellow-400"
            style={{
              boxShadow: "0 0 8px rgba(250,204,21,0.8), 0 0 16px rgba(250,204,21,0.5)",
            }}
            transition={{
              type: "spring",
              stiffness: 500,
              damping: 30,
            }}
          />
        )}
      </NavLink>
    </li>
  );
}

function DropdownItem({ to, children }) {
  return (
    <NavLink
      to={to}
      className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-yellow-50 hover:text-yellow-600 transition-colors font-medium"
    >
      {children}
    </NavLink>
  );
}

function MobileNavItem({ to, children, setOpen, icon, subitem }) {
  return (
    <NavLink
      to={to}
      onClick={() => setOpen(false)}
      className={`flex items-center gap-3 text-lg text-white hover:text-yellow-400 hover:bg-white/5 transition-all rounded-lg ${
        subitem ? "pl-8 py-2.5" : "px-4 py-3"
      }`}
    >
      {icon && <span className="text-xl">{icon}</span>}
      <span>{children}</span>
    </NavLink>
  );
}