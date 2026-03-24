import React from 'react';

export default function App() {
  return (
    <div className="flex flex-col h-screen bg-[#0a0a0a] text-white font-sans">
      <header className="p-4 border-b border-zinc-800 flex justify-between items-center bg-[#111] z-50">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center font-bold text-xl">B</div>
          <div>
            <h1 className="text-lg font-bold tracking-tight leading-none text-orange-500">Benis Burguer</h1>
            <p className="text-zinc-500 text-[10px] mt-1 uppercase tracking-widest font-semibold">Oficial App</p>
          </div>
        </div>
        <div className="px-2 py-1 bg-green-900/30 border border-green-800/50 rounded text-[10px] uppercase tracking-wider font-semibold text-green-500">
          Online
        </div>
      </header>

      <main className="flex-1 relative overflow-hidden bg-zinc-900">
        <iframe 
          src="https://benis-frontend.pages.dev" 
          className="w-full h-full border-none relative z-10"
          title="Benis Burguer Content"
          allow="geolocation; microphone; camera"
        />
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 bg-orange-600 px-6 py-2 rounded-full text-[10px] font-bold uppercase text-white shadow-2xl">
          Peça agora pelo App
        </div>
      </main>
    </div>
  );
}
