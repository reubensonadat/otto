const stats = [
  { value: "Ghana", label: "coastal communities served", color: "text-teal-600" },
  { value: "4", label: "programme areas", color: "text-slate-900" },
  { value: "100%", label: "of public donations go to programmes", color: "text-amber-600" },
  { value: "UK", label: "registered nonprofit", color: "text-teal-600" },
];

export function Stats() {
  return (
    <section className="section bg-slate-50">
      <div className="section-inner">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-5xl lg:text-6xl font-serif font-bold mb-3 {stat.color}">
                {stat.value}
              </div>
              <p className="text-lg text-slate-500 font-medium tracking-wide uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
