import React, { useState } from 'react';
import { 
  Shield, 
  BarChart3, 
  Scale, 
  ChevronRight, 
  MapPin, 
  Clock, 
  FileText, 
  Landmark, 
  Umbrella, 
  PiggyBank,
  CheckCircle2
} from 'lucide-react';

// Importación del logo oficial (Asegúrate de que esté en src/assets/)
import logoBalanceTax from './assets/logo.png';

const App = () => {
  const [servicioAbierto, setServicioAbierto] = useState(null);

  const azulLogo = "#002855";
  const verdeLogo = "#008B8B";

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const servicios = [
    { t: "Litigio Fiscal", i: <Scale />, d: "Representación y defensa legal ante autoridades fiscales." },
    { t: "Asesoría Financiera y Fiscal", i: <BarChart3 />, d: "Estrategias integrales para la salud de su empresa." },
    { t: "Contabilidad Mensual", i: <FileText />, d: "Registro y control preciso de sus operaciones financieras." },
    { t: "Determinación de Impuestos", i: <Landmark />, d: "Cálculo exacto para el cumplimiento de obligaciones." },
    { t: "Auditoría", i: <Shield />, d: "Revisiones profundas con dictámenes de validez oficial." },
    { t: "Declaraciones Mensuales", i: <CheckCircle2 />, d: "Presentación puntual de pagos provisionales." },
    { t: "Declaraciones Anuales", i: <CheckCircle2 />, d: "Cierre fiscal transparente y optimizado." },
    { t: "Fianzas y Seguros", i: <Umbrella />, d: "Protección patrimonial y garantías corporativas." },
    { t: "Fondos de Ahorro (Retiro)", i: <PiggyBank />, d: "Planeación para un futuro financiero sólido." }
  ];

  const planes = [
    {
      nombre: "Asesoría Básica",
      precio: "$799",
      color: azulLogo,
      puntos: ["100% teórica: obligaciones y bases.", "Explicación de régimen y deducciones.", "60 min de videollamada."]
    },
    {
      nombre: "Declaración Anual",
      precio: "$1,499",
      color: verdeLogo,
      popular: true,
      puntos: ["Ejecución guiada en portal SAT.", "Revisión y subida paso a paso.", "80 min de videollamada."]
    },
    {
      nombre: "Asesoría Práctica",
      precio: "$1,299",
      color: azulLogo,
      puntos: ["100% práctica: trámite en vivo.", "Guía con pantalla compartida.", "80 min de videollamada."]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-teal-100">
      
      {/* --- NAVBAR --- */}
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <img src={logoBalanceTax} alt="BalanceTax Logo" className="h-16 w-auto" />
          </div>
          <div className="hidden md:flex items-center gap-8 font-semibold text-sm uppercase tracking-wider">
            <button onClick={() => scrollToSection('servicios')} className="text-slate-600 hover:text-teal-600 transition">Servicios</button>
            <button onClick={() => scrollToSection('planes')} className="text-slate-600 hover:text-teal-600 transition">Planes</button>
            <button onClick={() => scrollToSection('ubicacion')} className="text-slate-600 hover:text-teal-600 transition">Ubicación</button>
            <button 
              onClick={() => window.open('https://wa.me/521777XXXXXXX', '_blank')}
              style={{ backgroundColor: azulLogo }}
              className="text-white px-6 py-2 rounded-full shadow-md"
            >
              Contacto
            </button>
          </div>
        </div>
      </nav>

      {/* --- HERO --- */}
      <header className="relative bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-6">
              Claridad <span style={{ color: verdeLogo }}>Fiscal</span>, Respaldo <span style={{ color: azulLogo }}>Contable</span>.
            </h1>
            <p className="text-lg text-slate-600 mb-10 max-w-xl mx-auto lg:mx-0">
              En BalanceTax combinamos la precisión contable con la fuerza estratégica de una Maestría en Derecho. Certeza total para su patrimonio.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <button onClick={() => scrollToSection('planes')} style={{ backgroundColor: azulLogo }} className="text-white px-8 py-4 rounded-xl font-bold shadow-xl">Contratar Plan</button>
              <button onClick={() => scrollToSection('servicios')} className="px-8 py-4 rounded-xl font-bold border-2 border-slate-200">Servicios</button>
            </div>
          </div>
          <img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop" className="rounded-[2rem] shadow-2xl h-[500px] w-full object-cover" alt="Asesoría" />
        </div>
      </header>

      {/* --- SERVICIOS (INTERACTIVO MÓVIL) --- */}
      <section id="servicios" className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-4xl font-bold text-white text-center mb-12 uppercase tracking-widest">Especialidades</h2>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8">
            {servicios.map((s, idx) => {
              const estaAbierto = servicioAbierto === idx;
              return (
                <div key={idx} onClick={() => setServicioAbierto(estaAbierto ? null : idx)} 
                  className={`bg-slate-800/40 p-5 md:p-8 rounded-xl border transition-all cursor-pointer flex flex-col items-center text-center lg:items-start lg:text-left ${estaAbierto ? 'border-teal-500 bg-slate-800/80 col-span-2 md:col-span-1' : 'border-slate-700'}`}>
                  <div style={{ color: verdeLogo }} className="mb-3">{React.cloneElement(s.i, { size: estaAbierto ? 32 : 26 })}</div>
                  <h3 className={`font-bold text-white ${estaAbierto ? 'text-base' : 'text-[13px] md:text-xl'}`}>{s.t}</h3>
                  <div className={`overflow-hidden transition-all ${estaAbierto ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0 md:max-h-40 md:opacity-100'}`}>
                    <p className="text-slate-400 text-xs md:text-sm mt-2">{s.d}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* --- PLANES --- */}
      <section id="planes" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-red-600 text-white text-center py-2 px-4 rounded-full mb-12 text-xs font-bold animate-pulse uppercase tracking-widest">Fecha límite: 30 de abril</div>
          <h2 className="text-3xl md:text-5xl font-black text-center mb-16 italic">Planes <span style={{ color: verdeLogo }}>claros</span></h2>
          <div className="grid md:grid-cols-3 gap-8">
            {planes.map((plan, idx) => (
              <div key={idx} className={`relative bg-white p-8 rounded-[2.5rem] shadow-xl border-2 transition-transform hover:scale-105 ${plan.popular ? 'border-teal-500' : 'border-transparent'}`}>
                {plan.popular && <div style={{ backgroundColor: verdeLogo }} className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-white text-[10px] font-bold uppercase">Más popular</div>}
                <h3 className="text-xl font-bold mb-4">{plan.nombre}</h3>
                <div className="text-4xl font-black mb-6" style={{ color: azulLogo }}>{plan.precio} <span className="text-xs text-slate-300">MXN</span></div>
                <ul className="space-y-4 mb-10">
                  {plan.puntos.map((p, i) => <li key={i} className="flex items-start gap-3 text-sm text-slate-600"><CheckCircle2 size={18} style={{ color: plan.color }} />{p}</li>)}
                </ul>
                <button style={{ backgroundColor: plan.popular ? verdeLogo : azulLogo }} className="w-full py-4 rounded-2xl text-white font-bold uppercase text-xs">Contratar</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- UBICACIÓN --- */}
      <section id="ubicacion" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 bg-slate-100 rounded-[3rem] overflow-hidden">
            <div className="p-10 lg:p-16">
              <h2 style={{ color: azulLogo }} className="text-4xl font-bold mb-8">Visítenos</h2>
              <div className="space-y-8">
                <div className="flex gap-5"><MapPin style={{ color: verdeLogo }} size={28} /><div><h4 className="font-bold">Dirección</h4><p className="text-slate-600">Av. Teopanzolco n° 217 int. 7, Vista Hermosa, Cuernavaca, Morelos.</p></div></div>
                <div className="flex gap-5"><Clock style={{ color: azulLogo }} size={28} /><div><h4 className="font-bold">Horarios</h4><p className="text-slate-600 font-medium">Lunes a Viernes: 8:00 AM — 9:00 PM</p></div></div>
              </div>
              <button onClick={() => window.open('https://www.google.com/maps/search/Av+Teopanzolco+217+Cuernavaca', '_blank')} className="mt-12 w-full py-4 bg-slate-900 text-white rounded-xl font-bold">Abrir Mapa</button>
            </div>
            <div className="bg-slate-300 min-h-[300px] lg:min-h-full">
              <img src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1200" className="w-full h-full object-cover grayscale" alt="Oficina" />
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-slate-900 text-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <img src={logoBalanceTax} alt="Logo BalanceTax" className="h-20 w-auto mb-6 brightness-0 invert opacity-90" />
            <p className="text-slate-400 text-sm max-w-lg mb-10 italic">Especialistas en estrategia fiscal y defensa legal en Morelos.</p>
            <div className="group border-t border-slate-800/50 pt-8 w-full max-w-xs">
              <a href="https://bananatech97.github.io/Banana_Tech/" target="_blank" className="flex flex-col items-center gap-2">
                <span className="text-[10px] uppercase tracking-[0.4em] text-slate-500 group-hover:text-teal-500">Desarrollado por</span>
                <span className="text-sm font-black tracking-widest text-slate-300 group-hover:text-white transition-colors">BANANA <span className="text-teal-500">TECH</span></span>
              </a>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-800 text-[10px] text-slate-600 text-center font-bold tracking-widest">
            © 2026 BALANCETAX — SOLUCIONES FISCALES INTEGRALES | CUERNAVACA, MEXICO
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;