import { Link } from 'react-router-dom';
import { ArrowRight, Building2, MapPin } from 'lucide-react';
import { UPCOMING_PROJECTS } from '../data/otooData';

export function UpcomingProjectsSection() {
  return (
    <section id="upcoming-projects" className="bg-white py-20 lg:py-28 px-5 sm:px-8 lg:px-12 border-t border-[#E9EAE4]">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center max-w-[680px] mx-auto mb-16">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#1E1B6B] mb-3">Building the Future</p>
          <h2 className="font-serif text-[34px] sm:text-[42px] lg:text-[48px] leading-[1.16] font-normal text-[#1E1B6B]">
            Schools &amp; Healthcare Facilities in Progress
          </h2>
          <p className="mt-5 text-[15px] sm:text-[16px] leading-[1.68] text-[#4A4A6A]">
            Help us reach our fundraising milestones for new school classrooms and community healthcare facilities across coastal Ghana.
            Every project has a transparent budget target, tracked milestones, and verified progress.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
          {UPCOMING_PROJECTS.map((project) => (
            <article
              key={project.id}
              className="bg-[#FAF7F0] rounded-[8px] border border-[#E9EAE4] overflow-hidden hover:shadow-[0_16px_36px_rgba(30,27,107,0.09)] transition-all duration-300 flex flex-col group"
            >
              <div className="relative h-48 overflow-hidden bg-[#1E1B6B]">
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (!target.dataset.triedFallback) {
                      target.dataset.triedFallback = 'true';
                      target.src = '/photos/aboadze-community-outreach.jpg';
                    }
                  }}
                />
                <div className="absolute top-3 left-3 z-10 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-[4px] bg-white/95 backdrop-blur-sm shadow-xs">
                  <MapPin className="w-3 h-3 text-[#3FBD92]" />
                  <span className="text-[10px] font-bold text-[#1E1B6B]">{project.location.split(',')[0]}</span>
                </div>
                <div className="absolute bottom-3 left-3 z-10 inline-flex items-center gap-1 px-2.5 py-1 rounded-[4px] bg-[#1E1B6B]/85 text-white backdrop-blur-xs">
                  <Building2 className="w-3 h-3 text-[#3FBD92]" />
                  <span className="text-[10px] font-bold uppercase tracking-wider">{project.type}</span>
                </div>
                <div className="absolute top-3 right-3 z-10 inline-flex items-center px-2 py-0.5 rounded-[4px] bg-[#3FBD92] text-[#1E1B6B] text-[10px] font-bold uppercase tracking-wider shadow-xs">
                  {project.status}
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col">
                <h3 className="font-serif text-[19px] sm:text-[21px] mb-2 leading-tight text-[#1E1B6B] group-hover:text-[#36A87D] transition-colors">
                  {project.title}
                </h3>
                <p className="text-[12px] sm:text-[13px] text-[#565677] leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                <div className="space-y-2 mb-3">
                  <div className="flex items-center justify-between text-[12px]">
                    <span className="text-[#565677]">Raised: <strong className="text-[#1E1B6B] font-bold tabular-nums">£{project.raised.toLocaleString('en-GB')}</strong></span>
                    <span className="text-[#565677]">Target: <strong className="text-[#1E1B6B] font-bold tabular-nums">£{project.target.toLocaleString('en-GB')}</strong></span>
                  </div>
                  <div className="w-full bg-[#E9EAE4] rounded-full h-2.5 overflow-hidden">
                    <div
                      className="h-full bg-[#3FBD92] transition-all duration-1000 ease-out rounded-full"
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-[11px] text-[#6E6E93] font-medium">
                    <span className="text-[#36A87D] font-bold">{project.progress}% funded</span>
                    <span>£{(project.target - project.raised).toLocaleString('en-GB')} to go</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#E9EAE4] flex items-center justify-between">
                  <span className="text-[11px] font-bold text-[#1E1B6B]">{project.impact}</span>
                  <Link
                    to="/upcoming-projects"
                    className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#1E1B6B] hover:text-[#3FBD92] transition-colors flex items-center gap-1"
                  >
                    Details <ArrowRight className="w-3 h-3 text-[#3FBD92]" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
