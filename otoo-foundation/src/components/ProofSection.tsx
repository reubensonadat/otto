import { useState } from "react";
import { CheckCircle2, Radio, ExternalLink, Calendar, Users } from "lucide-react";

const projects = [
  {
    id: "ET-8492",
    country: "Ethiopia",
    community: "Adi Daero, Tigray",
    coords: "14.1294° N, 38.2917° E",
    peopleServed: 450,
    tech: "Deep Drilled Borehole + Solar Pump",
    completionDate: "October 2024",
    status: "Active & Monitored",
    image: "https://images.unsplash.com/photo-1541888946425-d0fbb186f5f7?auto=format&fit=crop&w=800&q=80",
    impactStory: "Girls in Adi Daero used to walk 4 hours round-trip every morning for dirty river water. Now the tap is 50 meters away.",
  },
  {
    id: "MW-3091",
    country: "Malawi",
    community: "Chikwawa District",
    coords: "16.0378° S, 34.8014° E",
    peopleServed: 620,
    tech: "Piped System with 4 Tap Stands",
    completionDate: "August 2024",
    status: "Active & Monitored",
    image: "https://images.unsplash.com/photo-1594708767771-a7502209ff51?auto=format&fit=crop&w=800&q=80",
    impactStory: "A whole elementary school and health clinic now have unlimited clean running water for sanitation and hydration.",
  },
  {
    id: "KH-1940",
    country: "Cambodia",
    community: "Siem Reap Province",
    coords: "13.3671° N, 103.8448° E",
    peopleServed: 380,
    tech: "BioSand Filters & Rainwater Collection",
    completionDate: "December 2024",
    status: "Active & Monitored",
    image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=800&q=80",
    impactStory: "Household ceramic and sand filtration eliminates waterborne illness, helping children attend school regularly.",
  },
];

export function ProofSection() {
  const [activeProject, setActiveProject] = useState(0);
  const p = projects[activeProject];

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-gray-100" id="proof">
      <div className="section-container">
        
        {/* Header - Unboxed, tracked uppercase */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="eyebrow-dark">Open Data & Radical Proof</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-cw-black tracking-tight">
            Proof for every completed well.
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-normal">
            We don’t just ask you to trust us. When a water project is completed, we map it on Google Earth, assign exact GPS coordinates, upload field photos, and monitor water flow in real-time.
          </p>
        </div>

        {/* Interactive Project Viewer */}
        <div className="max-w-5xl mx-auto bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
          
          {/* Top selector tabs */}
          <div className="flex border-b border-gray-200 bg-cw-gray-50 overflow-x-auto">
            {projects.map((proj, idx) => (
              <button
                key={proj.id}
                onClick={() => setActiveProject(idx)}
                className={`flex-1 min-w-[200px] py-4 px-6 text-left border-b-2 transition-all cursor-pointer ${
                  activeProject === idx
                    ? "bg-white border-cw-yellow text-cw-black font-bold"
                    : "border-transparent text-gray-500 hover:text-cw-black hover:bg-gray-100/60"
                }`}
              >
                <div className="flex items-center justify-between text-xs font-mono uppercase text-gray-400">
                  <span>Project {proj.id}</span>
                  <span className="w-2 h-2 rounded-full bg-cw-black inline-block" />
                </div>
                <div className="text-sm font-bold mt-1 text-cw-black">
                  {proj.community}, {proj.country}
                </div>
              </button>
            ))}
          </div>

          {/* Active project card details */}
          <div className="grid lg:grid-cols-12 gap-8 p-6 sm:p-10 items-center">
            
            {/* Project Photo */}
            <div className="lg:col-span-6">
              <div className="relative rounded-xl overflow-hidden aspect-[4/3] group">
                <img
                  src={p.image}
                  alt={p.community}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-cw-black/85 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-mono flex items-center gap-1.5">
                  <Radio className="w-3 h-3 text-cw-yellow" strokeWidth={1.75} />
                  <span>GPS: {p.coords}</span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 bg-cw-black/90 backdrop-blur-sm text-white p-3.5 rounded-xl text-xs leading-relaxed">
                  "{p.impactStory}"
                </div>
              </div>
            </div>

            {/* Project Metadata */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-cw-black mb-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cw-black" strokeWidth={1.75} />
                  <span className="uppercase tracking-wider">{p.status}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-cw-black">
                  {p.community}
                </h3>
                <p className="text-sm text-gray-500 font-medium">
                  {p.country} • Completed in {p.completionDate}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 py-3 border-y border-gray-100">
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-gray-500 uppercase tracking-wider font-bold">
                    <Users className="w-3.5 h-3.5 text-cw-black" strokeWidth={1.75} />
                    <span>People Served</span>
                  </div>
                  <div className="text-2xl font-black text-cw-black mt-1">
                    {p.peopleServed}
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-1.5 text-xs text-gray-500 uppercase tracking-wider font-bold">
                    <Calendar className="w-3.5 h-3.5 text-cw-black" strokeWidth={1.75} />
                    <span>Technology</span>
                  </div>
                  <div className="text-sm font-bold text-cw-black mt-1 line-clamp-2">
                    {p.tech}
                  </div>
                </div>
              </div>

              <div className="space-y-2 text-xs text-gray-600">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-cw-black">Remote Sensor Status:</span>
                  <span className="text-cw-black font-bold">✓ Daily Flow Normal (1,840L)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-cw-black">Water Quality Test:</span>
                  <span className="text-cw-black font-bold">✓ 100% WHO Potable Standard</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-cw-black">Maintenance Committee:</span>
                  <span className="text-cw-black font-semibold">Trained & Active</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="#donate"
                  className="btn-cw-primary w-full text-center flex items-center justify-center gap-2"
                >
                  <span>Fund A Project Like This</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
