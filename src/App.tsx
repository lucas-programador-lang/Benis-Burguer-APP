import React from 'react';

/**
 * Código principal do Benis Burguer
 * Este arquivo agora é a base do seu App no Cloudflare Pages
 */
export default function App() {
  return (
    <div className="flex flex-col h-screen bg-[#0a0a0a] text-white font-sans">
      {/* Header do App */}
      <header className="p-4 border-b border-zinc-800 flex justify-between items-center bg-[#111] z-50">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center font-bold text-xl shadow-lg shadow-orange-900/20">
            B
          </div>
          <div>
            <h1 className="text-lg font-bold tracking-tight leading-none text-orange-500">Benis Burguer</h1>
            <p className="text-zinc-500 text-[10px] mt-1 uppercase tracking-widest font-semibold">Oficial App</p>
          </div>
        </div>
        
        <div className="flex gap-2">
          <span className="px-2 py-1 bg-green-900/30 border border-green-800/50 rounded text-[10px] uppercase tracking-wider font-semibold text-green-500">
            Online
          </span>
        </div>
      </header>

      {/* Área Principal - Onde o conteúdo do seu site aparece */}
      <main className="flex-1 relative overflow-hidden bg-zinc-900">
        {/* Background Decorativo (opcional) */}
        <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
          <h2 className="text-[15vw] font-black uppercase -rotate-12">Hamburgueria</h2>
        </div>

        {/* IMPORTANTE: Se você já tem o site de vendas pronto em outro link, 
            o iframe abaixo carrega ele. Se você for criar o site AQUI neste projeto,
            devemos substituir o iframe pelo código dos hambúrgueres.
        */}
        <iframe 
          src="https://benis-frontend.pages.dev" 
          className="w-full h-full border-none relative z-10"
          title="Benis Burguer App Content"
          allow="geolocation; microphone; camera"
        />

        {/* Barra de Status Inferior Estilizada */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 bg-orange-600 px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-tighter text-white shadow-2xl">
          Peça agora pelo App
        </div>
      </main>
    </div>
  );
}
