import { motion } from "framer-motion";
import { Play, Users, Calendar, Heart, BookOpen, MapPin, Phone, Mail, Facebook, Instagram, Youtube, ArrowRight, Sparkles, Clock, MessageCircle, Award, Video } from "lucide-react";

const sectionVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7 },
  },
};

const Home = () => {
  const events = [
    {
      title: "Culto Dominical",
      date: "Cada Domingo",
      time: "10:00 AM",
      type: "Presencial y Online",
      icon: Users,
      color: "blue"
    },
    {
      title: "Noche de Oración",
      date: "Viernes 10 de Enero",
      time: "7:00 PM",
      type: "Online",
      icon: Sparkles,
      color: "purple"
    },
    {
      title: "Estudio Bíblico",
      date: "Miércoles",
      time: "6:30 PM",
      type: "Grupos Pequeños",
      icon: BookOpen,
      color: "amber"
    }
  ];

  const sermons = [
    {
      title: "Fe que Transforma",
      pastor: "Pastor Juan García",
      date: "3 de Enero, 2026",
      views: "1.2K",
      thumbnail: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=600",
      duration: "45:20"
    },
    {
      title: "El Poder de la Oración",
      pastor: "Pastora María López",
      date: "27 de Diciembre, 2025",
      views: "980",
      thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600",
      duration: "38:15"
    },
    {
      title: "Viviendo en Propósito",
      pastor: "Pastor Carlos Ruiz",
      date: "20 de Diciembre, 2025",
      views: "1.5K",
      thumbnail: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600",
      duration: "52:30"
    }
  ];

  const stats = [
    { number: "1,500+", label: "Miembros", icon: Users },
    { number: "200+", label: "Sermones", icon: Video },
    { number: "50+", label: "Eventos/Año", icon: Calendar },
    { number: "15+", label: "Ministerios", icon: Heart }
  ];

  const ministries = [
    {
      name: "Jóvenes",
      description: "Crecimiento espiritual para la nueva generación",
      icon: Users,
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Niños",
      description: "Enseñanza bíblica divertida y significativa",
      icon: Heart,
      color: "from-pink-500 to-rose-500"
    },
    {
      name: "Matrimonios",
      description: "Fortaleciendo familias bajo principios bíblicos",
      icon: Heart,
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Evangelismo",
      description: "Llevando el mensaje de esperanza al mundo",
      icon: Sparkles,
      color: "from-amber-500 to-orange-500"
    }
  ];

  return (
    <div className="overflow-x-hidden">
      {/* ================= HERO SECTION ================= */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-purple-900/80 to-blue-900/90 z-10" />
          <img
            src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=1920"
            alt="Manantial de Vida"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute inset-0 z-10">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-20 text-center px-6 max-w-6xl"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring" }}
            className="inline-block mb-6"
          >
            <span className="px-6 py-2 bg-yellow-400/20 backdrop-blur-sm border border-yellow-400/30 rounded-full text-yellow-400 font-semibold text-sm">
              ✨ Bienvenido a Manantial de Vida
            </span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 text-white leading-tight">
            Un Manantial{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-400 animate-pulse">
              de Vida
            </span>
            <br />
            <span className="text-4xl md:text-5xl lg:text-6xl">
              para tu espíritu
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Un espacio de fe, restauración y crecimiento espiritual donde 
            <span className="font-semibold text-white"> Dios transforma vidas</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="group bg-gradient-to-r from-yellow-400 to-amber-500 text-black px-8 py-4 rounded-full font-bold shadow-2xl flex items-center space-x-2 hover:from-yellow-300 hover:to-amber-400 transition-all"
            >
              <Play className="w-5 h-5 group-hover:animate-pulse" />
              <span>Ver Último Sermón</span>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white/30 backdrop-blur-sm bg-white/10 text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-blue-900 transition-all flex items-center space-x-2"
            >
              <Calendar className="w-5 h-5" />
              <span>Próximos Eventos</span>
            </motion.button>
          </div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
              <div className="w-1 h-3 bg-white/70 rounded-full" />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ================= ESTADÍSTICAS ================= */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariant}
        className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all text-center border border-gray-100"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-4xl font-black text-gray-800 mb-2">{stat.number}</h3>
                  <p className="text-gray-600 font-medium">{stat.label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* ================= SERMONES RECIENTES ================= */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariant}
        className="py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl font-black mb-4"
            >
              Sermones que{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-300">
                Transforman Vidas
              </span>
            </motion.h2>
            <p className="text-blue-200 text-lg">Mensajes poderosos para tu crecimiento espiritual</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {sermons.map((sermon, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ y: -10 }}
                className="group bg-white/10 backdrop-blur-lg rounded-3xl overflow-hidden border border-white/20 hover:border-yellow-400/50 transition-all cursor-pointer"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={sermon.thumbnail}
                    alt={sermon.title}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center shadow-2xl">
                      <Play className="w-10 h-10 text-black ml-1" />
                    </div>
                  </div>

                  <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{sermon.duration}</span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-yellow-400 transition-colors">
                    {sermon.title}
                  </h3>
                  <p className="text-blue-200 mb-4">{sermon.pastor}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <span>{sermon.date}</span>
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{sermon.views} vistas</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-yellow-400 text-black px-8 py-4 rounded-full font-bold shadow-xl hover:bg-yellow-300 transition-colors inline-flex items-center space-x-2"
            >
              <span>Ver Todos los Sermones</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </motion.section>

      {/* ================= MISIÓN & VISIÓN ================= */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariant}
        className="py-24 px-6 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=800"
                  alt="Comunidad"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent" />
                <div className="absolute bottom-8 left-8 text-white">
                  <h3 className="text-3xl font-bold mb-2">Nuestra Comunidad</h3>
                  <p className="text-blue-100">Unidos en fe y amor</p>
                </div>
              </div>
              
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-yellow-400 rounded-3xl -z-10" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-500 rounded-3xl -z-10" />
            </motion.div>

            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-3xl border-l-4 border-blue-500"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-black text-gray-800">Nuestra Misión</h2>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Predicar el evangelio de Jesucristo con poder y verdad, 
                  restaurar vidas quebrantadas y formar discípulos comprometidos 
                  que transformen su comunidad con el amor de Dios.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-3xl border-l-4 border-purple-500"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-black text-gray-800">Nuestra Visión</h2>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Ser un manantial inagotable de vida que impacte generaciones, 
                  llevando esperanza, fe y amor a cada rincón del mundo, 
                  manifestando el reino de Dios en la tierra.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* ================= PRÓXIMOS EVENTOS ================= */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariant}
        className="py-24 px-6 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl font-black mb-4 text-gray-800"
            >
              Próximos{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Eventos
              </span>
            </motion.h2>
            <p className="text-gray-600 text-lg">Únete a nosotros en estos momentos especiales</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {events.map((event, i) => {
              const Icon = event.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all border border-gray-100 relative overflow-hidden group"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${
                    event.color === 'blue' ? 'from-blue-500/5 to-cyan-500/5' :
                    event.color === 'purple' ? 'from-purple-500/5 to-pink-500/5' :
                    'from-amber-500/5 to-orange-500/5'
                  } opacity-0 group-hover:opacity-100 transition-opacity`} />

                  <div className="relative z-10">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg ${
                      event.color === 'blue' ? 'bg-gradient-to-br from-blue-500 to-cyan-500' :
                      event.color === 'purple' ? 'bg-gradient-to-br from-purple-500 to-pink-500' :
                      'bg-gradient-to-br from-amber-500 to-orange-500'
                    }`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="text-2xl font-bold mb-3 text-gray-800">{event.title}</h3>
                    
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center space-x-2 text-gray-600">
                        <Calendar className="w-5 h-5" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-600">
                        <Clock className="w-5 h-5" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-600">
                        <MapPin className="w-5 h-5" />
                        <span>{event.type}</span>
                      </div>
                    </div>

                    <button className={`w-full py-3 rounded-xl font-bold text-white shadow-lg hover:shadow-xl transition-all ${
                      event.color === 'blue' ? 'bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600' :
                      event.color === 'purple' ? 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600' :
                      'bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600'
                    }`}>
                      Más Información
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* ================= MINISTERIOS ================= */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariant}
        className="py-24 px-6 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-4 text-gray-800">
              Nuestros Ministerios
            </h2>
            <p className="text-gray-600 text-lg">Encuentra tu lugar en la familia de Dios</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {ministries.map((ministry, i) => {
              const Icon = ministry.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  <div className={`bg-gradient-to-br ${ministry.color} rounded-3xl p-8 text-white shadow-xl hover:shadow-2xl transition-all cursor-pointer h-full`}>
                    <Icon className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="text-2xl font-bold mb-3">{ministry.name}</h3>
                    <p className="text-white/90 leading-relaxed">{ministry.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* ================= TESTIMONIO ================= */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariant}
        className="py-24 px-6 bg-gradient-to-br from-purple-900 via-blue-900 to-blue-900 text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <MessageCircle className="w-16 h-16 mx-auto mb-6 text-yellow-400" />
          <p className="text-3xl md:text-4xl font-bold mb-8 leading-relaxed italic">
            "Manantial de Vida cambió mi vida completamente. Encontré no solo una iglesia, 
            sino una familia que me ama y apoya incondicionalmente."
          </p>
          <div className="flex items-center justify-center space-x-4">
            <div className="w-16 h-16 bg-yellow-400 rounded-full" />
            <div className="text-left">
              <p className="font-bold text-lg">María González</p>
              <p className="text-blue-200">Miembro desde 2020</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* ================= CONTACTO ================= */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariant}
        className="py-24 px-6 bg-gradient-to-br from-blue-50 to-purple-50"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-5xl font-black mb-6 text-gray-800">
                ¿Necesitas{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  Oración?
                </span>
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Estamos aquí para ti. Contáctanos y con gusto oraremos contigo 
                o responderemos cualquier pregunta que tengas.
              </p>

              <div className="space-y-6">
                {[
                  { icon: Phone, text: "+52 000 000 0000", label: "Teléfono" },
                  { icon: Mail, text: "contacto@manantialdevida.com", label: "Email" },
                  { icon: MapPin, text: "Ciudad de México, México", label: "Ubicación" }
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center space-x-4 bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all"
                    >
                      <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 font-semibold">{item.label}</p>
                        <p className="text-gray-800 font-bold text-lg">{item.text}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              <div className="mt-8">
                <p className="text-gray-600 mb-4 font-semibold">Síguenos en:</p>
                <div className="flex space-x-4">
                  {[
                    { icon: Facebook, color: "from-blue-600 to-blue-700" },
                    { icon: Instagram, color: "from-pink-500 to-purple-600" },
                    { icon: Youtube, color: "from-red-600 to-red-700" }
                  ].map((social, i) => {
                    const Icon = social.icon;
                    return (
                      <motion.button
                        key={i}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                        className={`w-14 h-14 bg-gradient-to-br ${social.color} rounded-xl flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all`}
                      >
                        <Icon className="w-7 h-7" />
                      </motion.button>
                    );
                  })}
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-white rounded-3xl shadow-2xl p-8"
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Envíanos un mensaje</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Tu nombre"
                  className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors"
                />
                <input
                  type="email"
                  placeholder="Tu email"
                  className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors"
                />
                <textarea
                  rows={4}
                  placeholder="Tu mensaje o petición de oración"
                  className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors resize-none"
                />
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all"
                >
                  Enviar Mensaje
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* ================= MAPA ================= */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariant}
        className="h-[500px] relative"
      >
        <iframe
          title="Ubicación Manantial de Vida"
          src="https://www.google.com/maps?q=19.6462634,-99.0824234&z=17&output=embed"
          className="w-full h-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <div className="absolute top-8 left-8 bg-white rounded-2xl shadow-2xl p-6 max-w-sm">
          <h3 className="text-2xl font-bold mb-2 text-gray-800">Visítanos</h3>
          <p className="text-gray-600">
            Te esperamos cada domingo a las 10:00 AM para adorar juntos
          </p>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;