import { motion } from "framer-motion";
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin, Heart, ArrowRight, Send, Clock, Users } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.png";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <footer className="bg-gradient-to-b from-slate-900 via-slate-950 to-black text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16"
          >
            {/* Brand Section */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <img src={logo} alt="Manantial de Vida" className="h-12 object-contain" />
                <div>
                  <h3 className="text-2xl font-black text-white">Manantial de Vida</h3>
                  <p className="text-sm text-gray-400">Iglesia Cristiana</p>
                </div>
              </div>
              
              <p className="text-gray-300 leading-relaxed mb-6 text-sm">
                Un espacio de fe, restauración y crecimiento espiritual donde Dios transforma vidas. 
                Únete a nuestra comunidad y experimenta el amor transformador de Cristo.
              </p>

              {/* Newsletter Subscription */}
              <div className="space-y-3">
                <label className="text-sm font-semibold text-gray-300">Recibe Actualizaciones</label>
                <form onSubmit={handleSubscribe} className="relative">
                  <input
                    type="email"
                    placeholder="Tu correo electrónico"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-all"
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className="absolute right-1 top-1/2 -translate-y-1/2 p-2 rounded-lg bg-gradient-to-r from-yellow-400 to-yellow-500 text-black hover:from-yellow-500 hover:to-yellow-600 transition-all"
                  >
                    <Send className="w-5 h-5" />
                  </motion.button>
                </form>
                {subscribed && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-sm text-green-400 font-semibold"
                  >
                    ✓ ¡Gracias por suscribirte!
                  </motion.p>
                )}
              </div>

              {/* Social Media */}
              <div className="flex items-center gap-4 mt-8">
                <span className="text-sm text-gray-400 font-semibold">Síguenos:</span>
                <div className="flex gap-3">
                  {[
                    { icon: Facebook, color: "from-blue-600 to-blue-700", url: "#" },
                    { icon: Instagram, color: "from-pink-600 to-purple-600", url: "#" },
                    { icon: Youtube, color: "from-red-600 to-red-700", url: "#" },
                  ].map((social, i) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={i}
                        href={social.url}
                        whileHover={{ scale: 1.15, rotate: [0, -10, 10, 0] }}
                        whileTap={{ scale: 0.9 }}
                        className={`w-10 h-10 rounded-lg bg-gradient-to-br ${social.color} flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all`}
                      >
                        <Icon className="w-5 h-5" />
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants}>
              <h4 className="text-lg font-bold mb-6 text-white flex items-center gap-2">
                <span className="w-1 h-6 bg-gradient-to-b from-yellow-400 to-yellow-500 rounded-full" />
                Enlaces Rápidos
              </h4>
              <ul className="space-y-3">
                {[
                  { label: "Inicio", href: "/" },
                  { label: "Sermones", href: "/sermons" },
                  { label: "Ministerios", href: "/ministries" },
                  { label: "Eventos", href: "/events" },
                  { label: "Nosotros", href: "/about" },
                ].map((link, i) => (
                  <motion.li
                    key={i}
                    whileHover={{ x: 5 }}
                    className="group"
                  >
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-yellow-400 transition-colors flex items-center gap-2"
                    >
                      <span className="w-0 h-0.5 bg-yellow-400 group-hover:w-2 transition-all" />
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Ministerios */}
            <motion.div variants={itemVariants}>
              <h4 className="text-lg font-bold mb-6 text-white flex items-center gap-2">
                <span className="w-1 h-6 bg-gradient-to-b from-purple-400 to-purple-500 rounded-full" />
                Ministerios
              </h4>
              <ul className="space-y-3">
                {[
                  { label: "Niños", emoji: "👶" },
                  { label: "Jóvenes", emoji: "🙌" },
                  { label: "Mujeres", emoji: "👩" },
                  { label: "Hombres", emoji: "👨" },
                  { label: "Grupos de Vida", emoji: "📖" },
                ].map((ministry, i) => (
                  <motion.li
                    key={i}
                    whileHover={{ x: 5 }}
                    className="group"
                  >
                    <a
                      href="#"
                      className="text-gray-300 hover:text-purple-400 transition-colors flex items-center gap-2"
                    >
                      <span className="w-0 h-0.5 bg-purple-400 group-hover:w-2 transition-all" />
                      <span>{ministry.emoji}</span>
                      {ministry.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contacto */}
            <motion.div variants={itemVariants}>
              <h4 className="text-lg font-bold mb-6 text-white flex items-center gap-2">
                <span className="w-1 h-6 bg-gradient-to-b from-red-400 to-red-500 rounded-full" />
                Contacto
              </h4>
              <div className="space-y-4">
                <a
                  href="tel:+52000000000"
                  className="flex items-start gap-3 group cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-red-500/40 transition-all">
                    <Phone className="w-5 h-5 text-red-400" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Teléfono</p>
                    <p className="text-sm text-gray-200 group-hover:text-red-400 transition-colors font-semibold">
                      +52 000 000 0000
                    </p>
                  </div>
                </a>

                <a
                  href="mailto:contacto@manantialdevida.com"
                  className="flex items-start gap-3 group cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/40 transition-all">
                    <Mail className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Email</p>
                    <p className="text-sm text-gray-200 group-hover:text-blue-400 transition-colors font-semibold">
                      contacto@manantialdevida.com
                    </p>
                  </div>
                </a>

                <a href="#mapa" className="flex items-start gap-3 group cursor-pointer">
                  <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-green-500/40 transition-all">
                    <MapPin className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Ubicación</p>
                    <p className="text-sm text-gray-200 group-hover:text-green-400 transition-colors font-semibold">
                      Ciudad de México, México
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-3 pt-2">
                  <div className="w-10 h-10 rounded-lg bg-yellow-500/20 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-yellow-400" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Horario</p>
                    <p className="text-sm text-gray-200 font-semibold">
                      Dom: 10:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Divider */}
          <div className="relative h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-12" />

          {/* Stats Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
          >
            {[
              { number: "1.5K+", label: "Miembros Activos", icon: Users },
              { number: "200+", label: "Sermones", icon: "🎤" },
              { number: "50+", label: "Eventos/Año", icon: "📅" },
              { number: "15+", label: "Ministerios", icon: "🙏" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="text-center p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-yellow-400/30 transition-all"
              >
                <div className="text-2xl mb-2">
                  {typeof stat.icon === "string" ? stat.icon : <stat.icon className="w-6 h-6 mx-auto text-yellow-400" />}
                </div>
                <p className="text-xl font-bold text-white">{stat.number}</p>
                <p className="text-xs text-gray-400 mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-blue-600/20 border border-blue-500/30 rounded-2xl p-8 md:p-12 text-center backdrop-blur-sm"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4">¿Listo para unirte a nuestra familia?</h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Experimenta el amor transformador de Dios y sé parte de una comunidad que crece en fe cada día.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/"
                className="px-8 py-3 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
              >
                Asistir a un Culto
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/contact"
                className="px-8 py-3 rounded-full border-2 border-yellow-400 text-yellow-400 font-bold hover:bg-yellow-400 hover:text-black transition-all flex items-center justify-center gap-2"
              >
                Enviar Mensaje
                <Mail className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-white/10 py-8"
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-6 items-center">
              {/* Copyright */}
              <div className="text-center md:text-left">
                <p className="text-sm text-gray-400">
                  © 2026 Manantial de Vida. Todos los derechos reservados.
                </p>
              </div>

              {/* Center - Logo/Tagline */}
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 text-yellow-400">
                  <Heart className="w-4 h-4 fill-current" />
                  <p className="text-sm font-semibold">Transformando Vidas en Fe</p>
                  <Heart className="w-4 h-4 fill-current" />
                </div>
              </div>

              {/* Legal Links */}
              <div className="flex justify-center md:justify-end gap-6">
                {[
                  { label: "Privacidad", href: "#" },
                  { label: "Términos", href: "#" },
                  { label: "Cookies", href: "#" },
                ].map((link, i) => (
                  <a
                    key={i}
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-yellow-400 transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Scroll to Top Button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.9 }}
              className="absolute bottom-8 right-8 w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center text-black shadow-xl hover:shadow-2xl transition-all"
            >
              <ArrowRight className="w-6 h-6 rotate-[-90deg]" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}