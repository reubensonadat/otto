import { useState } from 'react';
import { Mail, MapPin, CheckCircle2 } from 'lucide-react';

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !message) return;
    setSubmitted(true);
  };

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="py-20 lg:py-28 bg-[#FAF7F0] border-b border-[#E9EAE4]">
        <div className="max-w-[1260px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl space-y-6">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#1E1B6B]">
              Get In Touch
            </p>
            <h1 className="font-serif text-4xl sm:text-6xl font-normal text-[#1E1B6B] tracking-tight leading-tight">
              We’d love to hear from you.
            </h1>
            <p className="text-lg sm:text-xl text-[#4A4A6A] leading-relaxed font-normal">
              Questions about our 100% model, sponsoring a project, brand collaborations, or media inquiries? Reach out to our team.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-20 lg:py-28 border-b border-[#E9EAE4]">
        <div className="max-w-[1260px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12">
            
            {/* Details */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <h3 className="font-serif text-2xl text-[#1E1B6B] mb-2">General Inquiries</h3>
                <p className="text-sm text-[#4A4A6A] leading-relaxed">
                  We reply to every email within 24–48 hours during business days.
                </p>
              </div>

              <div className="space-y-4 text-sm text-[#1E1B6B]">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-[4px] bg-[#FAF7F0] border border-[#E9EAE4] flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-[#1E1B6B]" />
                  </div>
                  <div>
                    <div className="text-xs uppercase text-[#6E6E93] font-bold tracking-wider">Email Us</div>
                    <a href="mailto:info@otoofoundation.org" className="font-bold text-[#1E1B6B] hover:text-[#36A87D]">
                      info@otoofoundation.org
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-[4px] bg-[#FAF7F0] border border-[#E9EAE4] flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-[#1E1B6B]" />
                  </div>
                  <div>
                    <div className="text-xs uppercase text-[#6E6E93] font-bold tracking-wider">Headquarters</div>
                    <div className="font-bold text-[#1E1B6B]">Otoo Foundation CIC, London, United Kingdom & Aboadze, Ghana</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-7 bg-[#FAF7F0] border border-[#E9EAE4] rounded-[6px] p-8 sm:p-10 shadow-sm">
              {submitted ? (
                <div className="text-center py-8 space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-[#3FBD92] mx-auto" />
                  <h3 className="font-serif text-2xl text-[#1E1B6B]">Thank you, {name || 'friend'}!</h3>
                  <p className="text-sm text-[#4A4A6A]">Your message has been received. Our team will get back to you shortly.</p>
                  <button
                    onClick={() => { setSubmitted(false); setMessage(''); }}
                    className="text-xs font-bold uppercase tracking-wider text-[#1E1B6B] border-b-2 border-[#3FBD92] pb-0.5 pt-2 cursor-pointer"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#1E1B6B] mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3.5 py-3 rounded-[4px] border border-[#D3D3E4] text-sm focus:outline-none focus:border-[#1E1B6B] bg-white text-[#1E1B6B]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#1E1B6B] mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3.5 py-3 rounded-[4px] border border-[#D3D3E4] text-sm focus:outline-none focus:border-[#1E1B6B] bg-white text-[#1E1B6B]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#1E1B6B] mb-1.5">
                      Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="How can we help?"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full p-3.5 rounded-[4px] border border-[#D3D3E4] text-sm focus:outline-none focus:border-[#1E1B6B] bg-white text-[#1E1B6B]"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#3FBD92] hover:bg-[#36A87D] active:scale-[0.99] text-[#1E1B6B] font-bold text-xs uppercase tracking-wider py-3.5 rounded-[4px] transition-all cursor-pointer shadow-sm"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
