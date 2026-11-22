import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Clock, MapPin, Building2, ArrowRight } from 'lucide-react';
import { UPCOMING_PROJECTS } from '../data/otooData';

const STATUS_CONFIG: Record<string, { label: string; color: string; bg: string; icon: React.ElementType }> = {
  Active: { label: 'Active', color: '#1E1B6B', bg: '#E8F7F0', icon: CheckCircle2 },
  Construction: { label: 'In Construction', color: '#3FBD92', bg: '#DBF7E8', icon: Clock },
  Foundation: { label: 'Foundation Laid', color: '#B45309', bg: '#FEF3C7', icon: Clock },
  'Fitting Out': { label: 'Fitting Out', color: '#1E1B6B', bg: '#E0E7FF', icon: MapPin },
};

export function ProjectsPage() {
  const [filterType, setFilterType] = useState<string>('All');

  const filtered = filterType === 'All'
    ? UPCOMING_PROJECTS
    : UPCOMING_PROJECTS.filter((p) => p.type.includes(filterType) || p.type === filterType);

  return (
    <div className="min-h-[70vh] flex flex-col bg-white">
      {/* Header */}
      <section className="bg-[#1E1B6B] text-white py-20 lg:py-28 px-5 sm:px-8 lg:px-12 overflow-hidden relative">
        <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: "url('/photos/coastal-fisherfolk.jpg')" }} aria-hidden="true" />
        <div className="relative z-10 max-w-[760px] mx-auto text-center">
          <span className="inline-block mb-6 px-4 py-1.5 bg-[#3FBD92]/20 border border-[#3FBD92]/40 text-[#9EF0CA] text-[11px] font-bold uppercase tracking-[0.18em] rounded-[4px]">
            Building Coastal Ghana &middot; Verified Progress
          </span>
          <h1 className="font-serif text-[40px] sm:text-[56px] lg:text-[64px] leading-[1.12] font-normal mb-6 tracking-[-0.02em]">
            School &amp; Healthcare Projects
          </h1>
          <p className="text-[16px] sm:text-[18px] leading-[1.7] text-[#D5D5EA] max-w-[580px] mx-auto">
            Track the live construction and funding status of our schools, health posts, and STEM labs across coastal Ghana.
          </p>
        </div>
      </section>

      {/* Projects List */}
      <section className="py-16 lg:py-24 px-5 sm:px-8 lg:px-12 max-w-[1260px] mx-auto w-full">
        {/* Filter buttons */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-12">
          <div className="flex flex-wrap gap-2">
            {['All', 'School Build', 'Hospital & Clinic', 'STEM Lab', 'Community Transform'].map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => setFilterType(type)}
                className={`px-4 py-2 rounded-[4px] text-[11px] font-bold uppercase tracking-[0.12em] transition-colors cursor-pointer ${
                  filterType === type
                    ? 'bg-[#1E1B6B] text-white shadow-xs'
                    : 'bg-[#FAF7F0] text-[#1E1B6B] hover:bg-[#E9EAE4] border border-[#E9EAE4]'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
          <p className="text-xs text-[#565677] font-semibold">
            Showing {filtered.length} active project{filtered.length === 1 ? '' : 's'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filtered.map((project) => {
            const statusCfg = STATUS_CONFIG[project.status] ?? STATUS_CONFIG.Active;
            const StatusIcon = statusCfg.icon;

            return (
              <article
                key={project.id}
                className="bg-[#FAF7F0] rounded-[8px] border border-[#E9EAE4] overflow-hidden flex flex-col hover:shadow-lg transition-all"
              >
                <div className="relative h-56 bg-[#1E1B6B] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-[4px] bg-white/95 text-[11px] font-bold text-[#1E1B6B] shadow-xs">
                      <MapPin className="w-3 h-3 text-[#3FBD92]" />
                      {project.location}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 z-10">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-[4px] bg-[#3FBD92] text-[11px] font-bold text-[#1E1B6B] uppercase tracking-wider shadow-xs">
                      <StatusIcon className="w-3.5 h-3.5" />
                      {statusCfg.label}
                    </span>
                  </div>
                </div>

                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-bold text-[#3FBD92] uppercase tracking-wider mb-2">
                      <Building2 className="w-4 h-4" />
                      <span>{project.type}</span>
                    </div>
                    <h2 className="font-serif text-2xl sm:text-3xl text-[#1E1B6B] mb-3 leading-tight">
                      {project.title}
                    </h2>
                    <p className="text-sm text-[#4A4A6A] leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#E9EAE4] space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs font-bold">
                        <span className="text-[#1E1B6B]">Raised: £{project.raised.toLocaleString('en-GB')}</span>
                        <span className="text-[#565677]">Target: £{project.target.toLocaleString('en-GB')}</span>
                      </div>
                      <div className="w-full bg-[#E9EAE4] rounded-full h-3 overflow-hidden">
                        <div
                          className="h-full bg-[#3FBD92] transition-all duration-1000 ease-out rounded-full"
                          style={{ width: `${project.progress}%` }}
                        />
                      </div>
                      <div className="flex justify-between text-[11px] text-[#6E6E93] font-semibold">
                        <span className="text-[#36A87D]">{project.progress}% completed</span>
                        <span>£{(project.target - project.raised).toLocaleString('en-GB')} remaining</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <span className="text-xs font-bold text-[#1E1B6B]">{project.impact}</span>
                      <Link
                        to="/donate"
                        className="inline-flex items-center gap-1.5 bg-[#3FBD92] hover:bg-[#36A87D] text-[#1E1B6B] font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-[4px] transition-colors shadow-xs"
                      >
                        Fund This Build <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
}
