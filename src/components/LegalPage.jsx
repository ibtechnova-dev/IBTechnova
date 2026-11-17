export default function LegalPage({ eyebrow, title, updated, intro, sections }) {
  return (
    <main className="min-h-screen relative overflow-hidden flex flex-col items-center neon-grid pt-32 pb-24">
      <section className="w-full max-w-3xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <span className="px-4 py-1.5 rounded-full border border-brand-cyan/30 bg-brand-cyan/10 text-brand-cyan text-xs font-medium tracking-widest uppercase mb-6 inline-block">
            {eyebrow}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold tracking-wider text-gradient-pink uppercase mb-4">{title}</h1>
          <p className="text-slate-500 text-sm">Last updated: {updated}</p>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-brand-pink to-transparent mx-auto mt-8 rounded-full" />
        </div>
        <div className="glass-panel rounded-3xl p-8 md:p-12 border-white/5">
          <p className="text-slate-300 leading-relaxed mb-10">{intro}</p>
          {sections.map((s) => (
            <div key={s.heading} className="mb-8 last:mb-0">
              <h2 className="text-xl font-bold text-slate-100 mb-3">{s.heading}</h2>
              {s.body.map((p, i) => (
                <p key={i} className="text-slate-400 leading-relaxed mb-3 last:mb-0">{p}</p>
              ))}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
