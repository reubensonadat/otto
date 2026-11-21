import { Heart, Sparkles, CheckCircle2, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { JerryCanIcon } from "../components/JerryCanLogo";

const values = [
  {
    title: "100% Model",
    desc: "We believe trust is earned through action. We prove that every public dollar can go to programs, not overhead.",
  },
  {
    title: "Radical Transparency",
    desc: "Every completed well is mapped with GPS coordinates, photos, and live remote flow sensors open to the public.",
  },
  {
    title: "Local Leadership",
    desc: "We don't impose solutions. We partner with local implementers who live in and understand the communities they serve.",
  },
  {
    title: "Hope Over Guilt",
    desc: "We never use guilt or shame to raise money. We invite people to celebrate progress and the joy of generous giving.",
  },
];

export function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="py-20 lg:py-28 bg-cw-gray-50 border-b border-gray-200">
        <div className="section-container">
          <div className="max-w-3xl space-y-6">
            <span className="eyebrow-dark">About charity: water</span>
            <h1 className="text-4xl sm:text-6xl font-black text-cw-black tracking-tight leading-tight">
              We believe in a world where everyone has clean water.
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed font-normal">
              Founded in 2006, charity: water is a non-profit organization bringing clean and safe drinking water to people in developing nations. In 18 years, we have funded over 150,000 water projects for 17.5+ million people.
            </p>
          </div>
        </div>
      </section>

      {/* The Founder's Story */}
      <section className="py-20 lg:py-28 border-b border-gray-100">
        <div className="section-container">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden aspect-[4/5] bg-cw-gray-100 shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"
                  alt="Founder"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <span className="eyebrow-dark">Origin Story</span>
              <h2 className="text-3xl sm:text-4xl font-black text-cw-black tracking-tight">
                How a nightclub promoter started a clean water movement.
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-gray-700 leading-relaxed">
                <p>
                  In his twenties, Scott Harrison had it all in New York City: promoting the biggest nightclubs, rubbing shoulders with celebrities, and living lavishly. Yet inside, he was spiritually bankrupt and searching for meaning.
                </p>
                <p>
                  In 2004, Scott quit his job and signed up as a volunteer photojournalist with Mercy Ships in Liberia. There, for the first time, he witnessed extreme poverty and people drinking contaminated water from brown swamp puddles.
                </p>
                <p>
                  Returning to New York with no money, Scott threw a 31st birthday party and asked his friends to give $20 instead of gifts. That night, he raised $15,000, wired 100% of it to a hospital in Uganda, and charity: water was born.
                </p>
              </div>

              <div className="pt-2">
                <div className="text-sm font-bold text-cw-black">— Scott Harrison, Founder & CEO</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-20 lg:py-28 bg-cw-gray-50 border-b border-gray-200">
        <div className="section-container">
          <div className="max-w-3xl mb-16 space-y-3">
            <span className="eyebrow-dark">Our Values</span>
            <h2 className="text-3xl sm:text-4xl font-black text-cw-black tracking-tight">
              Principles that guide everything we build.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((v) => (
              <div key={v.title} className="cw-card p-8 space-y-3">
                <h3 className="text-2xl font-black text-cw-black">{v.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link to="/#donate" className="btn-cw-primary">
              Join Our Mission
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
