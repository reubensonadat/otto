import { useState } from "react";
import { Link } from "react-router-dom";
import { CharityWaterLogo } from "../components/JerryCanLogo";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function SignInPage() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSent(true);
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-16 px-6 bg-cw-gray-50">
      <div className="w-full max-w-md bg-white rounded-2xl border border-gray-200 p-8 sm:p-10 shadow-sm space-y-8">
        <div className="text-center space-y-3">
          <Link to="/" className="inline-block cursor-pointer">
            <CharityWaterLogo className="justify-center" />
          </Link>
          <h1 className="text-2xl font-black text-cw-black tracking-tight pt-2">
            Sign in to your donor account
          </h1>
          <p className="text-xs text-gray-500">
            View your giving history, downloaded tax receipts, and completed well GPS reports.
          </p>
        </div>

        {sent ? (
          <div className="text-center space-y-4 py-4">
            <div className="w-12 h-12 rounded-full bg-cw-yellow flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6 text-cw-black" />
            </div>
            <h3 className="font-bold text-lg text-cw-black">Check your email</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              We sent a secure sign-in magic link to <strong className="text-cw-black">{email}</strong>.
            </p>
            <button
              onClick={() => setSent(false)}
              className="text-xs text-cw-black font-bold underline hover:text-gray-600"
            >
              Sign in with a different email
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-gray-500 block">
                Email Address
              </label>
              <input
                type="email"
                required
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm focus:outline-none focus:border-cw-black text-cw-black"
              />
            </div>

            <button
              type="submit"
              className="btn-cw-primary w-full py-3.5 text-xs flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>Send Sign-In Link</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <p className="text-[11px] text-gray-400 text-center pt-2">
              Passwordless & secure. No password to remember.
            </p>
          </form>
        )}

        <div className="pt-4 border-t border-gray-100 text-center">
          <Link to="/" className="text-xs font-bold text-gray-500 hover:text-cw-black">
            ← Back to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
