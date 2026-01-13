import React from "react";
import { Calendar, Clock, Video, MapPin, ArrowRight } from "lucide-react";

// Datos de ejemplo con videos de fondo y fotos de ponentes (usando placeholders de Pexels/Unsplash)
const events = [
  {
    id: 1,
    title: "Fe en Tiempos Difíciles",
    category: "Conferencia Principal",
    speaker: "Pastor Juan Martínez",
    role: "Líder General",
    date: "20 Ene, 2026",
    time: "7:00 PM",
    meet: "https://meet.google.com/",
    // Video de fondo (Nubes/Cielo inspirador)
    videoUrl: "https://cdn.pixabay.com/video/2020/01/22/31448-386828945_large.mp4",
    // Foto del ponente
    speakerImage: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    accent: "yellow"
  },
  {
    id: 2,
    title: "Propósito y Llamado",
    category: "Congreso Juvenil",
    speaker: "Pastora Ana López",
    role: "Directora de Jóvenes",
    date: "25 Ene, 2026",
    time: "6:30 PM",
    meet: "https://meet.google.com/",
    // Video de fondo (Gente reunida/Concierto suave)
    videoUrl: "https://cdn.pixabay.com/video/2019/04/20/22967-331885688_large.mp4",
    speakerImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    accent: "purple"
  },
  {
    id: 3,
    title: "Liderazgo Cristiano",
    category: "Seminario Intensivo",
    speaker: "Dr. Samuel Reyes",
    role: "Teólogo Invitado",
    date: "30 Ene, 2026",
    time: "8:00 PM",
    meet: "https://meet.google.com/",
    // Video de fondo (Libros/Estudio)
    videoUrl: "https://cdn.pixabay.com/video/2020/04/16/36294-408993809_large.mp4",
    speakerImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    accent: "blue"
  },
];

export default function Events() {
  return (
    <div className="min-h-screen bg-slate-950 text-white px-6 py-16 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Header con diseño más limpio */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="space-y-4">
            <span className="inline-block py-1 px-3 rounded-full bg-slate-800 border border-slate-700 text-xs font-semibold text-slate-300 uppercase tracking-wider">
              Agenda 2026
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
              Próximos Eventos
            </h1>
            <p className="text-slate-400 max-w-lg text-lg">
              Únete a nosotros en nuestras conferencias y seminarios para crecer juntos en fe y conocimiento.
            </p>
          </div>
          <button className="hidden md:flex items-center gap-2 text-white/80 hover:text-white transition group">
            Ver calendario completo <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform"/>
          </button>
        </div>

        {/* Grid de Tarjetas */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <div
              key={event.id}
              className="group relative h-[450px] w-full overflow-hidden rounded-3xl bg-slate-900 shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-yellow-500/20"
            >
              {/* --- CAPA 1: VIDEO DE FONDO --- */}
              <div className="absolute inset-0 h-full w-full">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60"
                >
                  <source src={event.videoUrl} type="video/mp4" />
                </video>
                {/* Overlay oscuro para legibilidad (Gradiente) */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-80" />
              </div>

              {/* --- CAPA 2: CONTENIDO --- */}
              <div className="relative z-10 flex h-full flex-col justify-between p-6 md:p-8">
                
                {/* Top: Categoría y Fecha */}
                <div className="flex justify-between items-start">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide bg-white/10 backdrop-blur-md border border-white/10
                      ${event.accent === 'yellow' ? 'text-yellow-400' : 
                        event.accent === 'purple' ? 'text-purple-400' : 'text-blue-400'}`}>
                      {event.category}
                    </span>
                    
                    <div className="flex flex-col items-end text-white/90">
                        <span className="text-2xl font-bold leading-none">{event.date.split(' ')[0]}</span>
                        <span className="text-sm font-medium uppercase text-white/60">{event.date.split(' ')[1]}</span>
                    </div>
                </div>

                {/* Bottom: Info Principal */}
                <div className="space-y-6">
                  
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-2 leading-tight group-hover:text-yellow-400 transition-colors">
                      {event.title}
                    </h2>
                    
                    {/* Sección del Ponente */}
                    <div className="flex items-center gap-3 mt-4">
                        <div className="relative">
                            <img 
                                src={event.speakerImage} 
                                alt={event.speaker} 
                                className="w-10 h-10 rounded-full object-cover border-2 border-slate-600 group-hover:border-yellow-400 transition-colors"
                            />
                            {/* Indicador de estado (opcional) */}
                            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-slate-900 rounded-full"></div>
                        </div>
                        <div>
                            <p className="text-sm font-semibold text-white">{event.speaker}</p>
                            <p className="text-xs text-slate-400">{event.role}</p>
                        </div>
                    </div>
                  </div>

                  {/* Detalles y Botón */}
                  <div className="space-y-4 pt-4 border-t border-white/10">
                    <div className="flex items-center gap-2 text-slate-300 text-sm">
                      <Clock size={16} className="text-yellow-500" />
                      <span>{event.time}</span>
                      <span className="mx-2 text-slate-600">|</span>
                      <Video size={16} className="text-yellow-500" />
                      <span>Google Meet</span>
                    </div>

                    <a
                      href={event.meet}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full py-3 rounded-xl bg-white text-slate-950 font-bold text-center 
                               hover:bg-yellow-400 hover:scale-[1.02] active:scale-95 transition-all duration-300 shadow-lg"
                    >
                      Unirse a la Reunión
                    </a>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}