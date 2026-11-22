import { useState } from 'react';
import { Play, Film, Clock, X } from 'lucide-react';

const VIDEOS = [
  {
    id: 'aboadze-clinic',
    title: 'Aboadze Community Health Screening in Action',
    duration: '3:45',
    thumbnail: '/photos/aboadze-health-screening.jpg',
    category: 'Healthcare',
    views: '2.4K views',
    location: 'Aboadze, Western Coast, Ghana',
    description: 'Watch our mobile medical team and local nurses provide free health screenings, diabetes checks, and emergency surgical referrals for coastal families.',
  },
  {
    id: 'elmina-school',
    title: "St. Mary's School Build & Classroom Foundations",
    duration: '4:12',
    thumbnail: '/photos/african-school-children.jpg',
    category: 'Education',
    views: '1.8K views',
    location: 'Elmina, Central Region, Ghana',
    description: 'Community elders and local masons in Elmina come together to lay the foundation for new school classrooms and desk facilities for 300+ children.',
  },
  {
    id: 'coastal-fisherfolk',
    title: 'Stories from the Coast: Voices of Ghana’s Fisherfolk',
    duration: '5:20',
    thumbnail: '/photos/coastal-fisherfolk.jpg',
    category: 'Community',
    views: '3.1K views',
    location: 'Takoradi Harbor Basin, Ghana',
    description: 'Artisanal fishermen and fishmonger mothers share how educational scholarships and healthcare access are transforming their children’s futures.',
  },
  {
    id: 'stem-challenge',
    title: 'Otoo STEM Challenge: Young Ghanaian Innovators',
    duration: '4:50',
    thumbnail: '/photos/stem-education.jpg',
    category: 'STEM',
    views: '2.9K views',
    location: 'Cape Coast, Central Region, Ghana',
    description: 'See coastal schoolchildren build electronics and solve real-world community challenges in the inaugural Otoo STEM Challenge.',
  },
];

export function VideoSection() {
  const [activeVideo, setActiveVideo] = useState<(typeof VIDEOS)[0] | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const filteredVideos = activeCategory === 'All'
    ? VIDEOS
    : VIDEOS.filter((v) => v.category === activeCategory);

  return (
    <section id="videos" className="bg-[#FAF7F0] py-20 lg:py-28 px-5 sm:px-8 lg:px-12 border-t border-[#E9EAE4]">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 lg:mb-16 gap-6">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#1E1B6B] mb-3">Foundation Documentaries</p>
            <h2 className="font-serif text-[34px] sm:text-[42px] lg:text-[48px] leading-[1.16] font-normal text-[#1E1B6B]">
              Field Stories from Coastal Ghana
            </h2>
            <p className="mt-3 text-[15px] sm:text-[16px] text-[#4A4A6A] max-w-xl">
              Authentic documentary shorts filmed directly in the communities where our programmes work.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {['All', 'Healthcare', 'Education', 'STEM', 'Community'].map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-[4px] text-[11px] font-bold uppercase tracking-[0.12em] transition-colors cursor-pointer ${
                  activeCategory === cat ? 'bg-[#3FBD92] text-[#1E1B6B] shadow-xs' : 'bg-white text-[#1E1B6B] hover:bg-[#FAF7F0] border border-[#E9EAE4]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredVideos.map((video) => (
            <article
              key={video.id}
              className="bg-white rounded-[8px] border border-[#E9EAE4] overflow-hidden group hover:shadow-[0_16px_36px_rgba(30,27,107,0.08)] transition-all cursor-pointer flex flex-col"
              onClick={() => setActiveVideo(video)}
            >
              <div className="relative h-44 sm:h-48 overflow-hidden bg-[#1E1B6B]">
                <img
                  src={video.thumbnail}
                  alt={video.title}
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
                <div className="absolute inset-0 flex items-center justify-center bg-black/35 group-hover:bg-black/55 transition-colors">
                  <div
                    className="w-12 h-12 rounded-full bg-[#3FBD92] flex items-center justify-center text-[#1E1B6B] shadow-lg group-hover:scale-110 transition-transform"
                    aria-label={`Watch ${video.title}`}
                  >
                    <Play className="w-5 h-5 ml-0.5 fill-[#1E1B6B]" />
                  </div>
                </div>
                <div className="absolute bottom-2.5 right-2.5 bg-black/75 backdrop-blur-xs text-white text-[10px] font-mono font-bold px-2 py-0.5 rounded-[3px]">
                  {video.duration}
                </div>
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <div className="flex items-center gap-2 mb-2">
                  <Film className="w-3.5 h-3.5 text-[#3FBD92] shrink-0" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#6E6E93]">{video.category}</span>
                  <span className="text-[#DFDFEA]">&middot;</span>
                  <span className="text-[11px] text-[#6E6E93]">{video.location.split(',')[0]}</span>
                </div>
                <h3 className="font-serif text-[16px] sm:text-[18px] leading-snug mb-2 group-hover:text-[#36A87D] transition-colors text-[#1E1B6B]">
                  {video.title}
                </h3>
                <div className="mt-auto pt-2 flex items-center gap-1.5 text-[11px] text-[#565677]">
                  <Clock className="w-3 h-3 text-[#3FBD92]" />
                  <span>{video.views}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Video Modal Player */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-[#1E1B6B] border border-white/20 rounded-[8px] max-w-2xl w-full overflow-hidden shadow-2xl text-white">
            <div className="relative aspect-video bg-black flex items-center justify-center">
              <img
                src={activeVideo.thumbnail}
                alt={activeVideo.title}
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-[#3FBD92] flex items-center justify-center text-[#1E1B6B] mb-4 shadow-xl">
                  <Play className="w-7 h-7 ml-1 fill-[#1E1B6B]" />
                </div>
                <p className="text-sm font-medium text-white/90">Documentary Preview: {activeVideo.duration}</p>
                <p className="text-xs text-[#3FBD92] mt-1 font-mono">{activeVideo.location}</p>
              </div>
              <button
                type="button"
                onClick={() => setActiveVideo(null)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/70 text-white flex items-center justify-center hover:bg-black cursor-pointer"
                aria-label="Close video player"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 text-xs text-[#3FBD92] font-bold uppercase tracking-wider mb-2">
                <span>{activeVideo.category}</span>
                <span>&middot;</span>
                <span>{activeVideo.location}</span>
              </div>
              <h3 className="font-serif text-2xl text-white mb-2">{activeVideo.title}</h3>
              <p className="text-sm text-[#D5D5EA] leading-relaxed mb-4">{activeVideo.description}</p>
              <button
                type="button"
                onClick={() => setActiveVideo(null)}
                className="bg-[#3FBD92] text-[#1E1B6B] text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-[4px] hover:bg-[#36A87D] cursor-pointer"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
