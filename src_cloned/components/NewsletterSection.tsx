import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import {
  canEnableBirthdayReminder,
  validateNewsletterForm,
  type NewsletterFormValues,
} from '../utils/donationLogic';
import { ImpactEnvelopeIllustration } from './BrandIcons';

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const DAYS = Array.from({ length: 31 }, (_, i) => String(i + 1).padStart(2, '0'));
const YEARS = Array.from({ length: 85 }, (_, i) => String(2026 - i));

export function NewsletterSection() {
  const [values, setValues] = useState<NewsletterFormValues>({
    firstName: '',
    lastName: '',
    email: '',
    birthMonth: '',
    birthDay: '',
    birthYear: '',
    birthdayReminder: false,
  });

  const [errors, setErrors] = useState<Partial<Record<'firstName' | 'lastName' | 'email', string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const reminderEnabled = canEnableBirthdayReminder(values);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const check = validateNewsletterForm(values);
    if (!check.valid) {
      setErrors(check.errors);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  return (
    <section id="newsletter" className="bg-[#FAF7F0] py-16 lg:py-20 px-5 sm:px-8 lg:px-12">
      <div className="max-w-[1060px] mx-auto bg-white rounded-[10px] border border-[#E9EAE4] shadow-[0_8px_30px_rgba(34,37,32,0.06)] p-7 sm:p-10 lg:p-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Purple Envelope Illustration + Editorial Copy */}
          <div className="lg:col-span-5 flex items-start gap-4">
            <ImpactEnvelopeIllustration className="w-[68px] h-[56px] shrink-0 mt-1" />
            <div>
              <h3 className="text-[20px] sm:text-[22px] font-bold text-[#222520] tracking-[-0.01em] leading-snug">
                Add Impact To Your Inbox
              </h3>
              <p className="mt-2 text-[15px] text-[#5C5E58] leading-relaxed">
                Get our emails to stay in the know.
              </p>
            </div>
          </div>

          {/* Right Column: Validated Subscription Form */}
          <div className="lg:col-span-7">
            {submitted ? (
              <div
                data-testid="newsletter-success"
                className="bg-[#FAF7F0] border border-[#E2D6B5] rounded-[8px] p-6 sm:p-8 text-center"
              >
                <CheckCircle2 className="w-10 h-10 text-[#2E7D32] mx-auto mb-3" />
                <h4 className="font-serif text-[26px] text-[#222520]">
                  Welcome to the movement, {values.firstName}!
                </h4>
                <p className="mt-2 text-[14px] text-[#5C5E58] leading-relaxed">
                  We’ve added <strong className="text-[#222520]">{values.email}</strong> to our
                  field updates list.
                  {values.birthdayReminder && reminderEnabled
                    ? ` We’ll also remind you ahead of ${values.birthMonth} ${values.birthDay} to pledge your birthday.`
                    : ''}
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setValues({
                      firstName: '',
                      lastName: '',
                      email: '',
                      birthMonth: '',
                      birthDay: '',
                      birthYear: '',
                      birthdayReminder: false,
                    });
                  }}
                  className="mt-5 text-[12px] font-bold uppercase tracking-[0.12em] text-[#222520] border-b-2 border-[#FFCA0A] pb-0.5 cursor-pointer"
                >
                  Subscribe another email
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="nl-first-name"
                      className="block text-[11px] font-bold uppercase tracking-[0.12em] text-[#222520] mb-1.5"
                    >
                      First Name
                    </label>
                    <input
                      id="nl-first-name"
                      type="text"
                      autoComplete="given-name"
                      value={values.firstName}
                      onChange={(e) => {
                        setValues((v) => ({ ...v, firstName: e.target.value }));
                        setErrors((err) => ({ ...err, firstName: undefined }));
                      }}
                      className={`w-full h-[44px] rounded-[4px] border px-3.5 text-[14px] text-[#222520] bg-white cw-focus ${
                        errors.firstName ? 'border-[#B91C1C]' : 'border-[#D4D5CE] focus:border-[#222520]'
                      }`}
                    />
                    {errors.firstName && (
                      <p role="alert" className="mt-1 text-[12px] text-[#B91C1C]">
                        {errors.firstName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="nl-last-name"
                      className="block text-[11px] font-bold uppercase tracking-[0.12em] text-[#222520] mb-1.5"
                    >
                      Last Name
                    </label>
                    <input
                      id="nl-last-name"
                      type="text"
                      autoComplete="family-name"
                      value={values.lastName}
                      onChange={(e) => {
                        setValues((v) => ({ ...v, lastName: e.target.value }));
                        setErrors((err) => ({ ...err, lastName: undefined }));
                      }}
                      className={`w-full h-[44px] rounded-[4px] border px-3.5 text-[14px] text-[#222520] bg-white cw-focus ${
                        errors.lastName ? 'border-[#B91C1C]' : 'border-[#D4D5CE] focus:border-[#222520]'
                      }`}
                    />
                    {errors.lastName && (
                      <p role="alert" className="mt-1 text-[12px] text-[#B91C1C]">
                        {errors.lastName}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="nl-email"
                    className="block text-[11px] font-bold uppercase tracking-[0.12em] text-[#222520] mb-1.5"
                  >
                    Email
                  </label>
                  <input
                    id="nl-email"
                    type="email"
                    autoComplete="email"
                    value={values.email}
                    onChange={(e) => {
                      setValues((v) => ({ ...v, email: e.target.value }));
                      setErrors((err) => ({ ...err, email: undefined }));
                    }}
                    className={`w-full h-[44px] rounded-[4px] border px-3.5 text-[14px] text-[#222520] bg-white cw-focus ${
                      errors.email ? 'border-[#B91C1C]' : 'border-[#D4D5CE] focus:border-[#222520]'
                    }`}
                  />
                  {errors.email && (
                    <p role="alert" className="mt-1 text-[12px] text-[#B91C1C]">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <span className="block text-[11px] font-bold uppercase tracking-[0.12em] text-[#222520] mb-1.5">
                    Birthday (optional)
                  </span>
                  <div className="grid grid-cols-3 border border-[#D4D5CE] rounded-[4px] overflow-hidden divide-x divide-[#D4D5CE] bg-white">
                    <select
                      aria-label="Birthday Month"
                      value={values.birthMonth}
                      onChange={(e) =>
                        setValues((v) => ({ ...v, birthMonth: e.target.value }))
                      }
                      className="h-[44px] px-3 text-[13px] text-[#5C5E58] bg-white cw-focus cursor-pointer"
                    >
                      <option value="">MM</option>
                      {MONTHS.map((m) => (
                        <option key={m} value={m}>
                          {m}
                        </option>
                      ))}
                    </select>

                    <select
                      aria-label="Birthday Day"
                      value={values.birthDay}
                      onChange={(e) =>
                        setValues((v) => ({ ...v, birthDay: e.target.value }))
                      }
                      className="h-[44px] px-3 text-[13px] text-[#5C5E58] bg-white cw-focus cursor-pointer"
                    >
                      <option value="">DD</option>
                      {DAYS.map((d) => (
                        <option key={d} value={d}>
                          {d}
                        </option>
                      ))}
                    </select>

                    <select
                      aria-label="Birthday Year"
                      value={values.birthYear}
                      onChange={(e) =>
                        setValues((v) => ({ ...v, birthYear: e.target.value }))
                      }
                      className="h-[44px] px-3 text-[13px] text-[#5C5E58] bg-white cw-focus cursor-pointer"
                    >
                      <option value="">YYYY</option>
                      {YEARS.map((y) => (
                        <option key={y} value={y}>
                          {y}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <label
                  className={`flex items-start gap-3 pt-1 ${
                    reminderEnabled ? 'cursor-pointer text-[#454742]' : 'cursor-not-allowed text-[#9E9F99]'
                  }`}
                >
                  <input
                    type="checkbox"
                    disabled={!reminderEnabled}
                    checked={reminderEnabled && values.birthdayReminder}
                    onChange={(e) =>
                      setValues((v) => ({ ...v, birthdayReminder: e.target.checked }))
                    }
                    className="mt-0.5 w-4 h-4 rounded border-[#D4D5CE] accent-[#222520]"
                  />
                  <span className="text-[11px] font-medium uppercase tracking-[0.08em] leading-snug">
                    Set a reminder to pledge my birthday and help change lives
                  </span>
                </label>

                <button
                  type="submit"
                  className="w-full bg-[#FFCA0A] hover:bg-[#F0BC00] active:scale-[0.99] text-[#222520] font-bold text-[12px] uppercase tracking-[0.14em] py-3.5 rounded-[4px] transition-all cursor-pointer cw-focus min-h-[44px]"
                >
                  Subscribe
                </button>

                <p className="text-[12px] italic text-[#71716C] text-center leading-relaxed">
                  By clicking “Subscribe” I accept the terms and conditions of the privacy policy
                  and consent to receive email updates and stories from charity: water.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
