import { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { canEnableBirthdayReminder, validateNewsletterForm, type NewsletterFormValues } from '../utils/donationLogic';
import { ImpactEnvelopeIllustration } from './BrandIcons';

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const DAYS = Array.from({ length: 31 }, (_, i) => String(i + 1).padStart(2, '0'));
const YEARS = Array.from({ length: 85 }, (_, i) => String(2026 - i));

export function NewsletterSection() {
  const [values, setValues] = useState<NewsletterFormValues>({ firstName: '', lastName: '', email: '', birthMonth: '', birthDay: '', birthYear: '', birthdayReminder: false });
  const [errors, setErrors] = useState<Partial<Record<'firstName' | 'lastName' | 'email', string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const reminderEnabled = canEnableBirthdayReminder(values);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const check = validateNewsletterForm(values);
    if (!check.valid) { setErrors(check.errors); return; }
    setErrors({});
    setSubmitted(true);
  };

  return (
    <section id="newsletter" className="bg-[#FAF7F0] py-16 lg:py-20 px-5 sm:px-8 lg:px-12 border-b border-[#E9EAE4]">
      <div className="max-w-[1060px] mx-auto bg-white rounded-[10px] border border-[#E9EAE4] shadow-[0_8px_30px_rgba(30,27,107,0.06)] p-7 sm:p-10 lg:p-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-5 flex items-start gap-4">
            <ImpactEnvelopeIllustration className="w-[68px] h-[56px] shrink-0 mt-1" />
            <div>
              {/* Unboxed tracked eyebrow - NO pills */}
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#1E1B6B] mb-1">Field Updates</p>
              <h3 className="text-[20px] sm:text-[22px] font-bold text-[#1E1B6B] tracking-[-0.01em] leading-snug">Add Impact To Your Inbox</h3>
              <p className="mt-2 text-[15px] text-[#565677] leading-relaxed">Get our emails to stay in the know.</p>
            </div>
          </div>
          <div className="lg:col-span-7">
            {submitted ? (
              <div data-testid="newsletter-success" className="bg-[#FAF7F0] border border-[#BFE8D6] rounded-[6px] p-6 sm:p-8 text-center">
                <CheckCircle2 className="w-10 h-10 text-[#3FBD92] mx-auto mb-3" />
                <h4 className="font-serif text-[26px] text-[#1E1B6B]">Welcome to the movement, {values.firstName}!</h4>
                <p className="mt-2 text-[14px] text-[#565677] leading-relaxed">We’ve added <strong className="text-[#1E1B6B]">{values.email}</strong> to our field updates list.{values.birthdayReminder && reminderEnabled ? ` We’ll also remind you ahead of ${values.birthMonth} ${values.birthDay} to pledge your birthday.` : ''}</p>
                <button type="button" onClick={() => { setSubmitted(false); setValues({ firstName: '', lastName: '', email: '', birthMonth: '', birthDay: '', birthYear: '', birthdayReminder: false }); }} className="mt-5 text-[12px] font-bold uppercase tracking-[0.12em] text-[#1E1B6B] border-b-2 border-[#3FBD92] pb-0.5 cursor-pointer">Subscribe another email</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="nl-first-name" className="block text-[11px] font-bold uppercase tracking-[0.12em] text-[#1E1B6B] mb-1.5">First Name</label>
                    <input id="nl-first-name" type="text" autoComplete="given-name" value={values.firstName} onChange={(e) => { setValues((v) => ({ ...v, firstName: e.target.value })); setErrors((err) => ({ ...err, firstName: undefined })); }} className={`w-full h-[44px] rounded-[4px] border px-3.5 text-[14px] text-[#1E1B6B] bg-white cw-focus ${errors.firstName ? 'border-[#B91C1C]' : 'border-[#D3D3E4] focus:border-[#1E1B6B]'}`} />
                    {errors.firstName && <p role="alert" className="mt-1 text-[12px] text-[#B91C1C]">{errors.firstName}</p>}
                  </div>
                  <div>
                    <label htmlFor="nl-last-name" className="block text-[11px] font-bold uppercase tracking-[0.12em] text-[#1E1B6B] mb-1.5">Last Name</label>
                    <input id="nl-last-name" type="text" autoComplete="family-name" value={values.lastName} onChange={(e) => { setValues((v) => ({ ...v, lastName: e.target.value })); setErrors((err) => ({ ...err, lastName: undefined })); }} className={`w-full h-[44px] rounded-[4px] border px-3.5 text-[14px] text-[#1E1B6B] bg-white cw-focus ${errors.lastName ? 'border-[#B91C1C]' : 'border-[#D3D3E4] focus:border-[#1E1B6B]'}`} />
                    {errors.lastName && <p role="alert" className="mt-1 text-[12px] text-[#B91C1C]">{errors.lastName}</p>}
                  </div>
                </div>
                <div>
                  <label htmlFor="nl-email" className="block text-[11px] font-bold uppercase tracking-[0.12em] text-[#1E1B6B] mb-1.5">Email</label>
                  <input id="nl-email" type="email" autoComplete="email" value={values.email} onChange={(e) => { setValues((v) => ({ ...v, email: e.target.value })); setErrors((err) => ({ ...err, email: undefined })); }} className={`w-full h-[44px] rounded-[4px] border px-3.5 text-[14px] text-[#1E1B6B] bg-white cw-focus ${errors.email ? 'border-[#B91C1C]' : 'border-[#D3D3E4] focus:border-[#1E1B6B]'}`} />
                  {errors.email && <p role="alert" className="mt-1 text-[12px] text-[#B91C1C]">{errors.email}</p>}
                </div>
                <div>
                  <span className="block text-[11px] font-bold uppercase tracking-[0.12em] text-[#1E1B6B] mb-1.5">Birthday (optional)</span>
                  <div className="grid grid-cols-3 border border-[#D3D3E4] rounded-[4px] overflow-hidden divide-x divide-[#D3D3E4] bg-white">
                    <select aria-label="Birthday Month" value={values.birthMonth} onChange={(e) => setValues((v) => ({ ...v, birthMonth: e.target.value }))} className="appearance-none h-[38px] bg-[#FAF7F0] text-[#1E1B6B] px-3 py-1 text-[12px] font-medium cw-focus cursor-pointer outline-none"><option value="">MM</option>{MONTHS.map((m) => <option key={m} value={m}>{m}</option>)}</select>
                    <select aria-label="Birthday Day" value={values.birthDay} onChange={(e) => setValues((v) => ({ ...v, birthDay: e.target.value }))} className="appearance-none h-[38px] bg-[#FAF7F0] text-[#1E1B6B] px-3 py-1 text-[12px] font-medium cw-focus cursor-pointer outline-none"><option value="">DD</option>{DAYS.map((d) => <option key={d} value={d}>{d}</option>)}</select>
                    <select aria-label="Birthday Year" value={values.birthYear} onChange={(e) => setValues((v) => ({ ...v, birthYear: e.target.value }))} className="appearance-none h-[38px] bg-[#FAF7F0] text-[#1E1B6B] px-3 py-1 text-[12px] font-medium cw-focus cursor-pointer outline-none"><option value="">YYYY</option>{YEARS.map((y) => <option key={y} value={y}>{y}</option>)}</select>
                  </div>
                </div>
                <label className={`flex items-start gap-3 pt-1 ${reminderEnabled ? 'cursor-pointer text-[#4A4A6A]' : 'cursor-not-allowed text-[#9B9BBB]'}`}>
                  <input type="checkbox" disabled={!reminderEnabled} checked={reminderEnabled && values.birthdayReminder} onChange={(e) => setValues((v) => ({ ...v, birthdayReminder: e.target.checked }))} className="mt-0.5 w-4 h-4 rounded-[2px] border-[#D3D3E4] accent-[#1E1B6B]" />
                  <span className="text-[11px] font-medium uppercase tracking-[0.08em] leading-snug">Set a reminder to pledge my birthday and help change lives</span>
                </label>
                <button type="submit" className="w-full bg-[#3FBD92] hover:bg-[#36A87D] active:scale-[0.99] text-[#1E1B6B] font-bold text-[12px] uppercase tracking-[0.14em] py-3.5 rounded-[4px] transition-all cursor-pointer cw-focus min-h-[44px]">Subscribe</button>
                <p className="text-[12px] italic text-[#6E6E93] text-center leading-relaxed">By clicking “Subscribe” I accept the terms and conditions of the privacy policy and consent to receive email updates and stories from Otoo Foundation.</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
