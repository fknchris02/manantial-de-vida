export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 px-4">
      <div className="w-full max-w-md bg-slate-900 rounded-2xl shadow-xl p-8">
        
        {/* Título */}
        <h2 className="text-3xl font-bold text-center text-white mb-2">
          Iniciar sesión
        </h2>
        <p className="text-center text-slate-400 mb-8">
          Bienvenido a Manantial de Vida
        </p>

        {/* Formulario */}
        <form className="space-y-5">

          {/* Email */}
          <div>
            <label className="block text-sm text-slate-300 mb-1">
              Correo electrónico
            </label>
            <input
              type="email"
              placeholder="correo@ejemplo.com"
              className="w-full px-4 py-2 rounded-lg bg-slate-800 text-white
                         focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm text-slate-300 mb-1">
              Contraseña
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 rounded-lg bg-slate-800 text-white
                         focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          {/* Botón */}
          <button
            type="submit"
            className="w-full bg-yellow-400 text-black font-semibold py-2
                       rounded-lg hover:bg-yellow-300 transition"
          >
            Entrar
          </button>
        </form>

        {/* Extra */}
        <p className="text-center text-slate-400 text-sm mt-6">
          ¿No tienes cuenta?{" "}
          <span className="text-yellow-400 hover:underline cursor-pointer">
            Contacta al administrador
          </span>
        </p>
      </div>
    </div>
  );
}
