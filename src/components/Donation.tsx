import React from "react";
import { Heart, Mail, ShieldCheck, RotateCw, PoundSterling } from "lucide-react";

const amounts = [25, 50, 100, 250, 500];

const programmes = [
  { id: "health", name: "Otoo Health", desc: "Community health screening and medical support" },
  { id: "educate", name: "Otoo Educate", desc: "Educational scholarships for students" },
  { id: "stem", name: "Otoo STEM Challenge", desc: "Science, technology, engineering and maths" },
  { id: "transform", name: "Otoo Transform", desc: "Community empowerment for women and families" },
];

export function Donation() {
  const [amount, setAmount] = React.useState(50);
  const [custom, setCustom] = React.useState("");
  const [frequency, setFrequency] = React.useState("once");
  const [programme, setProgramme] = React.useState("general");
  const [processing, setProcessing] = React.useState(false);
  const [status, setStatus] = React.useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setProcessing(true);
    setStatus("idle");
    await new Promise((r) => setTimeout(r, 1800));
    const ok = Math.random() > 0.1;
    setProcessing(false);
    setStatus(ok ? "success" : "error");
  };

  return (
    <section id="give" className="section bg-white">
      <div className="section-inner">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div className="space-y-10 lg:space-y-12">
            <div className="section-header text-left">
              <span className="eyebrow">Give hope</span>
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-slate-900 leading-tight">
                Your gift builds brighter futures
              </h2>
            </div>
            <p className="text-lg text-slate-600 leading-relaxed max-w-lg">
              Just £50 can support healthcare and education for a family in coastal Ghana. Join our community of
              monthly givers and help us reach more families.
            </p>

            <div className="grid grid-cols-3 gap-4 pt-2">
              {amounts.map((a) => (
                <button
                  key={a}
                  type="button"
                  onClick={() => {
                    setAmount(a);
                    setCustom("");
                  }}
                  className={`amount-btn ${
                    amount === a
                      ? "bg-teal-600 border-teal-600 text-white shadow-sm"
                      : "bg-white border-slate-200 text-slate-900 hover:border-teal-600 hover:bg-teal-50"
                  }`}
                >
                  <span className="text-base">£{a}</span>
                  <span className="text-[10px] text-slate-500 uppercase tracking-wider">one-time</span>
                </button>
              ))}
              <button
                type="button"
                onClick={() => {
                  setAmount(0);
                }}
                className={`amount-btn ${
                  custom !== "" && amount === 0
                    ? "bg-teal-600 border-teal-600 text-white shadow-sm"
                    : "bg-white border-slate-200 text-slate-900 hover:border-teal-600 hover:bg-teal-50"
                }`}
              >
                <span className="text-base">Custom</span>
                <span className="text-[10px] text-slate-500 uppercase tracking-wider">amount</span>
              </button>
            </div>

            {custom !== "" && amount === 0 && (
              <div className="mt-6">
                <input
                  type="number"
                  placeholder="Enter amount (£)"
                  className="input-field text-xl"
                  value={custom}
                  onChange={(e) => setCustom(e.target.value)}
                />
              </div>
            )}

            <div className="flex items-center gap-6 pt-8">
              {["once", "monthly"].map((f) => (
                <label
                  key={f}
                  className="flex items-center gap-3 cursor-pointer transition-colors"
                >
                  <input
                    type="radio"
                    name="frequency"
                    value={f}
                    checked={frequency === f}
                    onChange={(e) => setFrequency(e.target.value)}
                    className="w-5 h-5 rounded-full border-2"
                  />
                  {f === "once" ? "One-time gift" : "Monthly gift"}
                </label>
              ))}
            </div>

            <div className="mt-10 lg:mt-12">
              <h4 className="text-xs font-bold text-slate-900 tracking-widest uppercase mb-4">
                Direct your gift to
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {programmes.map((p) => (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setProgramme(p.id)}
                    className={`flex items-center gap-3 px-5 py-4 rounded-xl border font-medium text-sm transition-all ${
                      programme === p.id
                        ? "bg-teal-50 border-teal-600 text-teal-600 shadow-sm"
                        : "bg-white border-slate-200 text-slate-700 hover:border-teal-600 hover:bg-teal-50"
                    }`}
                  >
                    <PoundSterling className="h-4 w-4" />
                    <div>
                      <div className="font-semibold text-slate-900">{p.name}</div>
                      <div className="text-[11px] text-slate-500">{p.desc}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="card max-w-lg mx-auto">
            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Your donation
                  </p>
                  <p className="text-2xl font-serif font-bold text-slate-900">
                    £{amount === 0 ? custom || 0 : amount}.00
                  </p>
                </div>
                <div className="text-xs text-slate-500 uppercase tracking-wider">
                  {frequency === "monthly" ? "/ month" : "one-time"}
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-900 block uppercase tracking-wider">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    required
                    className="input-field"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-900 block uppercase tracking-wider">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Full name"
                    required
                    className="input-field"
                  />
                </div>
                <div className="form-btn-center">
                  <button
                    type="submit"
                    disabled={processing}
                    className={`px-10 py-3.5 rounded-full font-semibold text-base transition-all duration-200 disabled:opacity-60 ${
                      processing
                        ? "bg-slate-200 text-slate-500"
                        : "bg-teal-600 text-white hover:bg-teal-700 shadow-sm"
                    }`}
                  >
                    {processing ? (
                      <>
                        <RotateCw className="h-4 w-4 animate-spin mr-2" /> Processing…
                      </>
                    ) : (
                      "Complete Donation"
                    )}
                  </button>
                </div>
                <p className="text-[11px] text-slate-400 text-center uppercase tracking-wider">
                  Securely processed by Stripe. {frequency === "monthly"
                    ? "You can cancel anytime."
                    : "One-time donation."}
                </p>
              </form>

              {status === "success" && (
                <div className="border border-green-100 bg-green-50 rounded-[20px] p-8 text-center">
                  <Heart className="h-10 w-10 text-green-600 mx-auto mb-4" />
                  <h3 className="text-lg font-serif font-bold text-green-800 mb-2">
                    Thank you!
                  </h3>
                  <p className="text-green-700 text-sm leading-relaxed">
                    Your gift of £{amount === 0 ? custom || 0 : amount} will support{" "}
                    {programmes.find((p) => p.id === programme)?.name ||
                    "Otoo Foundation programmes"}. A confirmation has been sent to your email.
                  </p>
                </div>
              )}
              {status === "error" && (
                <div className="border border-red-100 bg-red-50 rounded-[20px] p-8 text-center">
                  <p className="text-red-700 text-sm font-medium mb-4">
                    Something went wrong. Please try again.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="text-teal-600 text-sm font-medium underline hover:text-teal-700"
                  >
                    Try again
                  </button>
                </div>
              )}
            </div>

            <div className="mt-12 pt-10 border-t border-slate-100">
              <h4 className="text-xs font-bold text-slate-900 tracking-widest uppercase mb-6">
                Why give with Otoo
              </h4>
              <div className="space-y-4">
                {[ShieldCheck, Mail].map((Icon, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <Icon className="h-5 w-5 text-teal-600 shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-500 leading-relaxed">
                      {i === 0
                        ? "100% of public donations fund programmes."
                        : "Receipts and impact updates straight to your inbox."}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
