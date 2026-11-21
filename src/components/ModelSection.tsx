import { ShieldCheck, PoundSterling, RefreshCw } from "lucide-react";

const features = [
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    title: "100% Model",
    desc: "Every pound of public donations goes directly to programmes — not overhead. Private supporters cover our operating costs.",
  },
  {
    icon: <PoundSterling className="h-6 w-6" />,
    title: "Transparent Giving",
    desc: "See exactly how your donation is used, with verified progress and impact updates from the communities we serve.",
  },
  {
    icon: <RefreshCw className="h-6 w-6" />,
    title: "Sustainable by Design",
    desc: "We partner with local communities to build programmes that last for years to come.",
  },
];

export function ModelSection() {
  return (
    <section className="section">
      <div className="section-inner">
        <div className="section-header">
          <span className="eyebrow">The Otoo Promise</span>
          <h2>How your gift works</h2>
          <p>
            Most charities split your gift between programmes and admin. We don’t. Private donors
            cover our operating costs, so your generosity goes straight to the source.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10 lg:gap-12">
          {features.map((feature) => (
            <div key={feature.title} className="card text-center">
              <div className="w-16 h-16 rounded-2xl bg-teal-50 flex items-center justify-center mx-auto mb-8 text-teal-600 shadow-lg">
                {feature.icon}
              </div>
              <h3 className="text-xl lg:text-2xl font-serif font-bold text-slate-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
