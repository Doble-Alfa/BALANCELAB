import React from 'react';
import { Shield, BarChart3, Scale, ChevronRight } from 'lucide-react';

const App = () => {
  // Definimos los colores aquí para asegurar que se apliquen correctamente
  const azulLogo = "#002855";
  const verdeLogo = "#008B8B";

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-teal-100">

      {/* --- NAVBAR --- */}
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="text-2xl font-black tracking-tighter italic">
              <span style={{ color: azulLogo }}>BALANCE</span>
              <span style={{ color: verdeLogo }}>LAB</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8 font-semibold">
            <a href="#servicios" className="text-slate-600 hover:text-teal-600 transition">Servicios</a>
            <a href="#nosotros" className="text-slate-600 hover:text-teal-600 transition">Nosotros</a>
            <button
              style={{ backgroundColor: azulLogo }}
              className="text-white px-6 py-2 rounded-md hover:opacity-90 transition shadow-md"
            >
              Contacto
            </button>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <header className="relative bg-white py-16 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-4 bg-teal-50 text-teal-700">
              Contadores & Abogados
            </span>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-6">
              Donde la <span style={{ color: verdeLogo }}>estrategia</span> se une con la <span style={{ color: azulLogo }}>ley</span>.
            </h1>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-xl">
              Brindamos claridad financiera y defensa legal sólida. Un enfoque multidisciplinario liderado por expertos con maestría en derecho para proteger tu patrimonio.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                style={{ backgroundColor: azulLogo }}
                className="text-white px-8 py-4 rounded-lg font-bold shadow-xl hover:scale-105 transition-transform"
              >
                Solicitar Asesoría
              </button>
              <button className="flex items-center gap-2 text-slate-900 px-8 py-4 rounded-lg font-bold border-2 border-slate-200 hover:bg-slate-50 transition">
                Nuestros Servicios <ChevronRight size={20} />
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-teal-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
            <img
              src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1000&auto=format&fit=crop"
              alt="Derecho y Contabilidad"
              className="relative rounded-3xl shadow-2xl border border-slate-100 object-cover h-[500px] w-full"
            />
          </div>
        </div>
      </header>

      {/* --- SECCIÓN DE SERVICIOS --- */}
      <section id="servicios" className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Servicios Especializados</h2>
            <div style={{ backgroundColor: verdeLogo }} className="h-1.5 w-20"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Tarjeta 1 */}
            <div className="bg-slate-800/50 p-10 rounded-2xl border border-slate-700 hover:border-teal-500/50 transition group">
              <BarChart3 style={{ color: verdeLogo }} className="w-12 h-12 mb-6 group-hover:scale-110 transition" />
              <h3 className="text-xl font-bold text-white mb-3">Contabilidad General</h3>
              <p className="text-slate-400 leading-relaxed">Gestión precisa de registros, nóminas y estados financieros para tu empresa.</p>
            </div>

            {/* Tarjeta 2 */}
            <div className="bg-slate-800/50 p-10 rounded-2xl border border-slate-700 hover:border-teal-500/50 transition group">
              <Scale style={{ color: verdeLogo }} className="w-12 h-12 mb-6 group-hover:scale-110 transition" />
              <h3 className="text-xl font-bold text-white mb-3">Defensa y Litigio</h3>
              <p className="text-slate-400 leading-relaxed">Respaldo legal en auditorías y procesos judiciales con visión jurídica experta.</p>
            </div>

            {/* Tarjeta 3 */}
            <div className="bg-slate-800/50 p-10 rounded-2xl border border-slate-700 hover:border-teal-500/50 transition group">
              <Shield style={{ color: verdeLogo }} className="w-12 h-12 mb-6 group-hover:scale-110 transition" />
              <h3 className="text-xl font-bold text-white mb-3">Asesoría Estratégica</h3>
              <p className="text-slate-400 leading-relaxed">Planeación fiscal y consultoría para el crecimiento seguro de tu negocio.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-white py-12 border-t border-slate-200 text-center">
        <p className="text-slate-400 text-sm font-medium">
          © 2026 BALANCE LAB. Excelencia en servicios contables y jurídicos.
        </p>
      </footer>
    </div>
  );
};

export default App;