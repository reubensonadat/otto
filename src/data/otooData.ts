import type { ImpactTotals, WaterProjectCluster } from '../utils/donationLogic';

export interface WhyWaterStory {
  id: 'health' | 'education' | 'women' | 'economic';
  tabLabel: string;
  statStatement: string;
  linkLabel: string;
  image: string;
  fallbackImage: string;
  imageAlt: string;
  detailHeadline: string;
  detailBody: string;
  proofFacts: { figure: string; caption: string }[];
}

export interface ActionCardItem {
  id: string;
  badge?: string;
  label: string;
  title: string;
  description: string;
  ctaLabel: string;
  icon: 'spring' | 'sponsor' | 'fundraise' | 'gift' | 'partner' | 'honor';
  image: string;
  fallbackImage: string;
  imageAlt: string;
  modalIntent: 'monthly' | 'sponsor' | 'fundraise' | 'once';
}

export const BASE_IMPACT_TOTALS: ImpactTotals = {
  peopleServed: 842_000,
  waterProjects: 42,
  countries: 6,
};

export const WHY_WATER_STORIES: WhyWaterStory[] = [
  {
    id: 'health',
    tabLabel: 'Health',
    statStatement:
      'Access to clean water and basic sanitation can save around 16,000 lives every week.',
    linkLabel: 'Learn about lives changed',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=85',
    fallbackImage: '/field/health.jpg',
    imageAlt: 'Healthcare worker providing community screening and health support in coastal Ghana.',
    detailHeadline: 'Clean water stops waterborne disease at the source',
    detailBody:
      'Diseases from dirty water kill more people every year than all forms of violence, including war. When a community gains clean water alongside handwashing stations and sanitation training, preventable illnesses drop sharply within months.',
    proofFacts: [
      { figure: '16,000', caption: 'Lives saved every week through clean water and basic sanitation' },
      { figure: '50%+', caption: 'Reduction in childhood diarrheal illness in served villages' },
      { figure: '100%', caption: 'Of public donations dedicated directly to water infrastructure' },
    ],
  },
  {
    id: 'education',
    tabLabel: 'Education',
    statStatement:
      'Less time collecting water means more time in class—and clean school taps help girls stay enrolled through graduation.',
    linkLabel: 'Learn about education impact',
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1200&q=85',
    fallbackImage: '/field/youth.jpg',
    imageAlt: 'Young students studying joyfully in a classroom with clean drinking water.',
    detailHeadline: 'Clean water keeps students healthy and in the classroom',
    detailBody:
      'Children often miss hours of school walking miles to collect water or recovering from waterborne sickness. Installing safe water points and private sanitation facilities on school grounds boosts attendance, especially for teenage girls.',
    proofFacts: [
      { figure: '443M', caption: 'School days lost globally each year to water-related illnesses' },
      { figure: '15 min', caption: 'Average round-trip walk to water after a school tap is built' },
      { figure: '2x', caption: 'Higher secondary school attendance for girls with school WASH access' },
    ],
  },
  {
    id: 'women',
    tabLabel: 'Women',
    statStatement:
      'Women are responsible for 72% of the water collected in Sub-Saharan Africa. When water arrives nearby, women reclaim hours every day.',
    linkLabel: 'Learn about women and water',
    image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=1200&q=85',
    fallbackImage: '/field/outreach.jpg',
    imageAlt: 'Women celebrating community empowerment and access to clean water.',
    detailHeadline: 'When a village gets clean water, women get their time back',
    detailBody:
      'Every day, women and girls spend an estimated 200 million hours walking to collect water from distant ponds and streams. Local water points eliminate that daily burden—freeing women to lead community committees, start businesses, and care for their families safely.',
    proofFacts: [
      { figure: '200M hrs', caption: 'Spent daily by women and girls collecting water worldwide' },
      { figure: '72%', caption: 'Share of household water collected by women in Sub-Saharan Africa' },
      { figure: '40 lbs', caption: 'Weight of a single filled water can carried on foot' },
    ],
  },
  {
    id: 'economic',
    tabLabel: 'Economic Growth',
    statStatement:
      'Every £1 invested in clean water and sanitation can yield up to £4.30 in local economic returns through health and saved time.',
    linkLabel: 'Learn about economic growth',
    image: 'https://images.unsplash.com/photo-1594708767771-a7502209ff51?auto=format&fit=crop&w=1200&q=85',
    fallbackImage: '/field/community.jpg',
    imageAlt: 'Community members thriving around newly installed water tap stands and market gardens.',
    detailHeadline: 'Water unlocks lasting local prosperity',
    detailBody:
      'Time spent walking for water is time that cannot be spent growing food, earning income, or building small enterprises. Reliable water access lets families irrigate market gardens, cut medical costs, and invest in their children’s futures.',
    proofFacts: [
      { figure: '£4.30', caption: 'Economic return for every £1 invested in water and sanitation' },
      { figure: '£260B', caption: 'Annual global economic value lost due to lack of basic water' },
      { figure: '42', caption: 'Communities where local partners build and sustain projects' },
    ],
  },
];

export const PROJECT_CLUSTERS: WaterProjectCluster[] = [
  {
    id: 'aboadze',
    country: 'Ghana',
    region: 'Western Coast, Ghana',
    projectCount: 14,
    countLabel: '14',
    peopleServed: 420000,
    mapX: 490,
    mapY: 250,
    radius: 28,
    lat: 5.1167,
    lng: -1.7500,
    gps: '5.1167° N, 1.7500° W',
    featuredVillage: 'Aboadze Coastal Community',
    technology: 'Deep Drilled Borehole + Solar Pump',
    completedDate: 'October 2026',
    partner: 'Otoo Foundation Ghana Field Unit',
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186f5f7?auto=format&fit=crop&w=800&q=85',
    fallbackImage: '/field/hero.jpg',
    summary: 'Community health screening and solar-powered piped water tap stand network serving coastal families in Aboadze.',
  },
  {
    id: 'takoradi',
    country: 'Ghana',
    region: 'Western Region, Ghana',
    projectCount: 8,
    countLabel: '8',
    peopleServed: 240000,
    mapX: 475,
    mapY: 260,
    radius: 22,
    lat: 4.8870,
    lng: -1.7550,
    gps: '4.8870° N, 1.7550° W',
    featuredVillage: 'Takoradi Fisherfolk Sector',
    technology: 'Piped Water Network & Latrines',
    completedDate: 'August 2026',
    partner: 'Otoo Ghana Implementers',
    image: 'https://images.unsplash.com/photo-1585186682011-03a4b641d6e1?auto=format&fit=crop&w=800&q=85',
    fallbackImage: '/field/community.jpg',
    summary: 'High-volume community water kiosks reducing salinity and eliminating waterborne typhoid in the port basin.',
  },
  {
    id: 'cape-coast',
    country: 'Ghana',
    region: 'Central Region, Ghana',
    projectCount: 6,
    countLabel: '6',
    peopleServed: 182000,
    mapX: 520,
    mapY: 245,
    radius: 20,
    lat: 5.1053,
    lng: -1.2466,
    gps: '5.1053° N, 1.2466° W',
    featuredVillage: 'Cape Coast Rural Outskirts',
    technology: 'Rainwater Harvesting & Filtration',
    completedDate: 'December 2026',
    partner: 'Central Region Water Committee',
    image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=800&q=85',
    fallbackImage: '/field/outreach.jpg',
    summary: 'Primary school water towers and community tap stations keeping over 18,000 children in school.',
  },
  {
    id: 'ethiopia-tigray',
    country: 'Ethiopia',
    region: 'Tigray Region',
    projectCount: 6,
    countLabel: '6',
    peopleServed: 320000,
    mapX: 620,
    mapY: 210,
    radius: 24,
    lat: 14.1294,
    lng: 38.2917,
    gps: '14.1294° N, 38.2917° E',
    featuredVillage: 'Adi Daero District',
    technology: 'Deep Aquifer Borehole (120m)',
    completedDate: 'September 2026',
    partner: 'Relief Society of Tigray (REST)',
    image: 'https://images.unsplash.com/photo-1543623252-cb433439c2e3?auto=format&fit=crop&w=800&q=85',
    fallbackImage: '/field/youth.jpg',
    summary: 'Deep well drilled through granite basalt rock, ending 4-hour morning walks for clean drinking water.',
  },
  {
    id: 'malawi-chikwawa',
    country: 'Malawi',
    region: 'Chikwawa District',
    projectCount: 5,
    countLabel: '5',
    peopleServed: 210000,
    mapX: 610,
    mapY: 330,
    radius: 20,
    lat: -16.0378,
    lng: 34.8014,
    gps: '16.0378° S, 34.8014° E',
    featuredVillage: 'Shire Valley Community',
    technology: 'Gravity Flow System (4 Taps)',
    completedDate: 'July 2026',
    partner: 'WaterAid Malawi',
    image: 'https://images.unsplash.com/photo-1594708767771-a7502209ff51?auto=format&fit=crop&w=800&q=85',
    fallbackImage: '/field/health.jpg',
    summary: 'Spring catchment fed into mountain piped distribution lines with cellular flow sensor monitoring.',
  },
  {
    id: 'cambodia-siemreap',
    country: 'Cambodia',
    region: 'Siem Reap Province',
    projectCount: 3,
    countLabel: '3',
    peopleServed: 145000,
    mapX: 790,
    mapY: 230,
    radius: 18,
    lat: 13.3671,
    lng: 103.8448,
    gps: '13.3671° N, 103.8448° E',
    featuredVillage: 'Tonle Sap Rural Basin',
    technology: 'BioSand Household Filters',
    completedDate: 'November 2026',
    partner: 'Clear Cambodia',
    image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=800&q=85',
    fallbackImage: '/field/community.jpg',
    summary: 'Locally made concrete BioSand filters eliminating parasites and bacteria for flood-prone village households.',
  },
];

export const ACTION_CARDS: ActionCardItem[] = [
  {
    id: 'monthly-spring',
    badge: 'THE SPRING',
    label: 'JOIN MONTHLY GIVING',
    title: 'Give clean water every month',
    description: 'A monthly gift brings clean water to families all year long and funds sustainable local maintenance.',
    ctaLabel: 'Join Today',
    icon: 'spring',
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186f5f7?auto=format&fit=crop&w=800&q=85',
    fallbackImage: '/field/outreach.jpg',
    imageAlt: 'Smiling woman standing beside a running clean water tap.',
    modalIntent: 'monthly',
  },
  {
    id: 'sponsor-project',
    label: 'SPONSOR A WATER PROJECT',
    title: 'Sponsor a water project',
    description: 'By sponsoring a project, you can provide clean water for an entire community, school, or health clinic.',
    ctaLabel: 'Sponsor Now',
    icon: 'sponsor',
    image: 'https://images.unsplash.com/photo-1585186682011-03a4b641d6e1?auto=format&fit=crop&w=800&q=85',
    fallbackImage: '/field/youth.jpg',
    imageAlt: 'Two joyful community members lifting clean water at a rural well.',
    modalIntent: 'sponsor',
  },
  {
    id: 'start-fundraiser',
    label: 'START A FUNDRAISER',
    title: 'Start a fundraiser',
    description: 'Pledge your birthday, run a marathon, or rally friends to bring clean water to communities in need.',
    ctaLabel: 'Get Started',
    icon: 'fundraise',
    image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=800&q=85',
    fallbackImage: '/field/health.jpg',
    imageAlt: 'Smiling friends rallying together for clean water.',
    modalIntent: 'fundraise',
  },
  {
    id: 'give-fundraiser',
    label: 'GIVE TO A FUNDRAISER',
    title: 'Give to a fundraiser',
    description: 'Support a community campaign that captures your heart and help fund verified water projects worldwide.',
    ctaLabel: 'Give Today',
    icon: 'gift',
    image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=800&q=85',
    fallbackImage: '/field/community.jpg',
    imageAlt: 'Community members gathering at a clean water point.',
    modalIntent: 'once',
  },
  {
    id: 'brand-partner',
    label: 'BECOME A BRAND PARTNER',
    title: 'Become a brand partner',
    description: 'Work closely with our partnerships team to create customer-facing clean water initiatives with proven impact.',
    ctaLabel: 'Partner With Us',
    icon: 'partner',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=85',
    fallbackImage: '/field/hero.jpg',
    imageAlt: 'Purpose-driven team working on humanitarian partnerships.',
    modalIntent: 'sponsor',
  },
  {
    id: 'honor-someone',
    label: 'HONOR SOMEONE SPECIAL',
    title: 'Honor someone special',
    description: 'Celebrate a milestone or remember a loved one by giving clean water in their name with a custom e-card.',
    ctaLabel: 'Give in Honor',
    icon: 'honor',
    image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=800&q=85',
    fallbackImage: '/field/health.jpg',
    imageAlt: 'Hopeful portrait in lush natural light.',
    modalIntent: 'once',
  },
];

export const FOOTER_COLUMNS = [
  {
    heading: 'take action',
    links: [
      { label: 'give', action: 'donate' as const },
      { label: 'join the spring', action: 'monthly' as const },
      { label: 'give to a fundraiser', action: 'fundraise' as const },
      { label: 'give in honor of someone', action: 'once' as const },
      { label: 'sponsor a community', action: 'sponsor' as const },
    ],
  },
  {
    heading: 'get involved',
    links: [
      { label: 'create an account', action: 'signin' as const },
      { label: 'fundraise', action: 'fundraise' as const },
      { label: 'our work', action: 'page-our-work' as const },
      { label: 'the spring', action: 'page-the-spring' as const },
    ],
  },
  {
    heading: 'get to know us',
    links: [
      { label: 'our story', action: 'page-about' as const },
      { label: 'meet the team', action: 'page-about' as const },
      { label: 'financials & 100% model', action: 'model-100' as const },
      { label: 'contact us', action: 'page-contact' as const },
    ],
  },
  {
    heading: 'connect',
    links: [
      { label: 'help & faq', action: 'page-contact' as const },
      { label: 'brand partnerships', action: 'page-contact' as const },
      { label: 'responsible disclosure', action: 'model-100' as const },
      { label: 'privacy policy', action: 'model-100' as const },
    ],
  },
];
