/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

export default function App() {
  return (
    <div className="flex flex-col h-screen bg-[#0a0a0a] text-white font-sans">
      <header className="p-4 border-b border-zinc-800 flex justify-between items-center bg-[#111]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center font-bold text-xl">B</div>
          <div>
            <h1 className="text-lg font-bold tracking-tight leading-none">Benis Burguer</h1>
            <p className="text-zinc-500 text-xs mt-1">Android WebView Container</p>
          </div>
        </div>
        <div className="flex gap-2">
          <span className="px-2 py-1 bg-zinc-800 border border-zinc-700 rounded text-[10px] uppercase tracking-wider font-semibold text-zinc-400">Kotlin Native</span>
          <span className="px-2 py-1 bg-orange-900/30 border border-orange-800/50 rounded text-[10px] uppercase tracking-wider font-semibold text-orange-500">Live Preview</span>
        </div>
      </header>
      <main className="flex-1 relative bg-zinc-900">
        <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
          <h2 className="text-[20vw] font-black uppercase rotate-12">Benis</h2>
        </div>
        <iframe 
          src="https://benis-frontend.pages.dev" 
          className="w-full h-full border-none relative z-10"
          title="Benis Burguer Preview"
        />
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 bg-zinc-900/80 backdrop-blur-md border border-zinc-700 px-4 py-2 rounded-full text-xs text-zinc-300 shadow-xl">
          Simulando visualização mobile do site
        </div>
      </main>
    </div>
  );
}
