export type CurrencyCode = 'GBP' | 'GHS' | 'USD';
export type GivingFrequency = 'monthly' | 'once';

export interface CurrencyConfig {
  code: CurrencyCode;
  symbol: string;
  label: string;
  costPerPerson: number;
  monthlyPresets: number[];
  oncePresets: number[];
  defaultMonthly: number;
  defaultOnce: number;
  exampleMonthly: number;
}

export const CURRENCY_CONFIG: Record<CurrencyCode, CurrencyConfig> = {
  GBP: {
    code: 'GBP',
    symbol: '£',
    label: 'Pound sterling',
    costPerPerson: 30,
    monthlyPresets: [5, 10, 20, 40],
    oncePresets: [30, 60, 120, 250],
    defaultMonthly: 20,
    defaultOnce: 60,
    exampleMonthly: 15,
  },
  GHS: {
    code: 'GHS',
    symbol: 'GH₵',
    label: 'Ghanaian Cedi',
    costPerPerson: 450,
    monthlyPresets: [75, 150, 300, 600],
    oncePresets: [450, 900, 1800, 3750],
    defaultMonthly: 300,
    defaultOnce: 900,
    exampleMonthly: 225,
  },
  USD: {
    code: 'USD',
    symbol: '$',
    label: 'United States dollar',
    costPerPerson: 40,
    monthlyPresets: [10, 20, 40, 100],
    oncePresets: [50, 100, 150, 500],
    defaultMonthly: 40,
    defaultOnce: 100,
    exampleMonthly: 20,
  },
};

export interface DonationRecord {
  id: string;
  amount: number;
  frequency: GivingFrequency;
  currency: CurrencyCode;
  peopleServed: number;
  donorName: string;
  donorEmail: string;
  timestamp: string;
}

export interface CommunityCluster {
  id: string;
  country: string;
  region: string;
  programmeCount: number;
  countLabel: string;
  peopleServed: number;
  mapX: number;
  mapY: number;
  radius: number;
  lat: number;
  lng: number;
  gps: string;
  featuredVillage: string;
  primaryProgramme: string;
  completedDate: string;
  partner: string;
  image: string;
  fallbackImage?: string;
  summary: string;
}

export interface UpcomingProject {
  id: string;
  title: string;
  type: 'School Build' | 'Hospital & Clinic' | 'STEM Lab' | 'Community Transform';
  location: string;
  target: number;
  raised: number;
  progress: number;
  status: 'Planning' | 'Foundation' | 'Construction' | 'Fitting Out' | 'Active';
  image: string;
  imageAlt: string;
  description: string;
  impact: string;
}

export interface ImpactTotals {
  peopleServed: number;
  programmes: number;
  communities: number;
}

export interface NewsletterFormValues {
  firstName: string;
  lastName: string;
  email: string;
  birthMonth: string;
  birthDay: string;
  birthYear: string;
  birthdayReminder: boolean;
}

export interface ValidationResult {
  valid: boolean;
  error?: string;
}

export interface NewsletterValidationResult {
  valid: boolean;
  errors: Partial<Record<'firstName' | 'lastName' | 'email', string>>;
}

export function calculatePeopleServed(
  amount: number,
  frequency: GivingFrequency,
  currency: CurrencyCode
): number {
  if (!Number.isFinite(amount) || amount <= 0) return 0;
  const { costPerPerson } = CURRENCY_CONFIG[currency];
  const effectiveAnnual = frequency === 'monthly' ? amount * 12 : amount;
  return Math.max(1, Math.round(effectiveAnnual / costPerPerson));
}

export function formatCurrencyAmount(amount: number, currency: CurrencyCode): string {
  const { symbol } = CURRENCY_CONFIG[currency];
  const formatted = Number.isInteger(amount)
    ? amount.toLocaleString('en-GB')
    : amount.toLocaleString('en-GB', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  return `${symbol}${formatted}`;
}

export function validateDonationAmount(
  amount: number,
  currency: CurrencyCode
): ValidationResult {
  const { symbol } = CURRENCY_CONFIG[currency];
  if (!Number.isFinite(amount) || amount <= 0) {
    return { valid: false, error: 'Please enter a valid donation amount.' };
  }
  const min = currency === 'GHS' ? 25 : 2;
  if (amount < min) {
    return { valid: false, error: `Minimum donation is ${symbol}${min}.` };
  }
  if (amount > 10_000_000) {
    return { valid: false, error: `For major gifts, please contact our institutional partnerships team.` };
  }
  return { valid: true };
}

export function validateDonorDetails(name: string, email: string): {
  valid: boolean;
  errors: Partial<Record<'name' | 'email', string>>;
} {
  const errors: Partial<Record<'name' | 'email', string>> = {};
  if (name.trim().length < 2) errors.name = 'Please enter your full name.';
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  if (!emailRegex.test(email.trim())) errors.email = 'Please enter a valid email address.';
  return { valid: Object.keys(errors).length === 0, errors };
}

export function canEnableBirthdayReminder(values: Pick<NewsletterFormValues, 'birthMonth' | 'birthDay'>): boolean {
  return Boolean(values.birthMonth && values.birthDay);
}

export function validateNewsletterForm(values: NewsletterFormValues): NewsletterValidationResult {
  const errors: Partial<Record<'firstName' | 'lastName' | 'email', string>> = {};
  if (!values.firstName.trim()) errors.firstName = 'First name is required.';
  if (!values.lastName.trim()) errors.lastName = 'Last name is required.';
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  if (!emailRegex.test(values.email.trim())) errors.email = 'Please enter a valid email address.';
  return { valid: Object.keys(errors).length === 0, errors };
}

export function filterCommunityClusters(clusters: CommunityCluster[], selectedCountry: string, searchQuery: string): CommunityCluster[] {
  const q = searchQuery.trim().toLowerCase();
  return clusters.filter((cluster) => {
    const matchesCountry = !selectedCountry || selectedCountry === 'ALL' || cluster.country === selectedCountry;
    if (!matchesCountry) return false;
    if (!q) return true;
    return (
      cluster.country.toLowerCase().includes(q) ||
      cluster.region.toLowerCase().includes(q) ||
      cluster.featuredVillage.toLowerCase().includes(q) ||
      cluster.primaryProgramme.toLowerCase().includes(q)
    );
  });
}

export function computeImpactTotals(baseTotals: ImpactTotals, donations: DonationRecord[]): ImpactTotals {
  const extraPeople = donations.reduce((sum, d) => sum + d.peopleServed, 0);
  return {
    peopleServed: baseTotals.peopleServed + extraPeople,
    programmes: baseTotals.programmes,
    communities: baseTotals.communities,
  };
}
