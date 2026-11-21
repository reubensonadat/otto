import type { ImpactTotals, WaterProjectCluster } from '../utils/donationLogic';

export interface WhyWaterStory {
  id: 'health' | 'education' | 'women' | 'economic';
  tabLabel: string;
  statStatement: string;
  linkLabel: string;
  image: string;
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
  imageAlt: string;
  modalIntent: 'monthly' | 'sponsor' | 'fundraise' | 'once';
}

export const BASE_IMPACT_TOTALS: ImpactTotals = {
  peopleServed: 22_051_391,
  waterProjects: 218_691,
  countries: 29,
};

export const WHY_WATER_STORIES: WhyWaterStory[] = [
  {
    id: 'health',
    tabLabel: 'Health',
    statStatement:
      'Access to clean water and basic sanitation can save around 16,000 lives every week.',
    linkLabel: 'Learn about lives changed',
    image: '/src/assets/images/story_health_water_1795273194723.jpg',
    imageAlt: 'A smiling woman in a crimson sweater washes her hands at an outdoor clean water tap stand.',
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
    image: '/src/assets/images/story_education_water_1795273195577.jpg',
    imageAlt: 'Smiling schoolgirls in crisp uniforms filling clean drinking water bottles at a school tap station.',
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
    image: '/src/assets/images/story_women_water_1795273196005.jpg',
    imageAlt: 'Joyful women filling bright yellow jerrycans with clear water at a community handpump.',
    detailHeadline: 'When a village gets clean water, women get their time back',
    detailBody:
      'Every day, women and girls spend an estimated 200 million hours walking to collect water from distant ponds and streams. Local water points eliminate that daily burden—freeing women to lead community committees, start businesses, and care for their families safely.',
    proofFacts: [
      { figure: '200M hrs', caption: 'Spent daily by women and girls collecting water worldwide' },
      { figure: '72%', caption: 'Share of household water collected by women in Sub-Saharan Africa' },
      { figure: '40 lbs', caption: 'Weight of a single filled yellow jerrycan carried on foot' },
    ],
  },
  {
    id: 'economic',
    tabLabel: 'Economic Growth',
    statStatement:
      'Every $1 invested in clean water and sanitation can yield up to $4.30 in local economic returns through health and saved time.',
    linkLabel: 'Learn about economic growth',
    image: '/src/assets/images/story_economic_water_1795273196131.jpg',
    imageAlt: 'A smiling small-scale female farmer irrigating thriving green vegetables beside a community water tap.',
    detailHeadline: 'Water unlocks lasting local prosperity',
    detailBody:
      'Time spent walking for water is time that cannot be spent growing food, earning income, or building small enterprises. Reliable water access lets families irrigate market gardens, cut medical costs, and invest in their children’s futures.',
    proofFacts: [
      { figure: '$4.30', caption: 'Economic return for every $1 invested in water and sanitation' },
      { figure: '$260B', caption: 'Annual global economic value lost due to lack of basic water' },
      { figure: '29', caption: 'Countries where local partners build and sustain projects' },
    ],
  },
];

export const PROJECT_CLUSTERS: WaterProjectCluster[] = [
  {
    id: 'guatemala',
    country: 'Guatemala',
    region: 'Latin America',
    projectCount: 110,
    countLabel: '110',
    peopleServed: 48_400,
    mapX: 210,
    mapY: 248,
    radius: 17,
    gps: '15.4685° N, 90.3708° W',
    featuredVillage: 'Alta Verapaz Highlands',
    technology: 'Rainwater Harvesting & Piped Tap',
    completedDate: 'July 2026',
    partner: 'Water For People Guatemala',
    image: '/src/assets/images/story_health_water_1795273194723.jpg',
    summary: 'Household rainwater catchment and gravity-fed mountain tap stands serving indigenous highland families.',
  },
  {
    id: 'sierra-leone',
    country: 'Sierra Leone',
    region: 'West Africa',
    projectCount: 4100,
    countLabel: '4.1k',
    peopleServed: 1_240_000,
    mapX: 446,
    mapY: 274,
    radius: 25,
    gps: '8.4840° N, 11.7799° W',
    featuredVillage: 'Kailahun District',
    technology: 'Hand-Dug Well with Afridev Pump',
    completedDate: 'September 2026',
    partner: 'GOAL Sierra Leone',
    image: '/src/assets/images/action_sponsor_project_1795273197337.jpg',
    summary: 'Community-managed protected wells paired with trained local mechanics and spare-parts supply chains.',
  },
  {
    id: 'niger',
    country: 'Niger',
    region: 'West Africa',
    projectCount: 2000,
    countLabel: '2k',
    peopleServed: 785_000,
    mapX: 506,
    mapY: 252,
    radius: 23,
    gps: '13.5116° N, 2.1254° E',
    featuredVillage: 'Maradi Rural Commune',
    technology: 'Solar-Powered Piped System',
    completedDate: 'October 2026',
    partner: 'World Vision Niger',
    image: '/src/assets/images/story_women_water_1795273196005.jpg',
    summary: 'Deep-aquifer solar boreholes pumping clean drinking water to elevated tanks and village kiosks.',
  },
  {
    id: 'ethiopia',
    country: 'Ethiopia',
    region: 'East Africa',
    projectCount: 13000,
    countLabel: '13k',
    peopleServed: 4_860_000,
    mapX: 598,
    mapY: 266,
    radius: 27,
    gps: '13.4967° N, 39.4753° E',
    featuredVillage: 'Adigrat Rural Cluster',
    technology: 'Drilled Well & Spring Protection',
    completedDate: 'October 2026',
    partner: 'Relief Society of Tigray',
    image: '/src/assets/images/hero_clean_water_1795273196300.jpg',
    summary: 'Over 13,000 verified water points monitored with IoT flow sensors to guarantee long-term uptime.',
  },
  {
    id: 'uganda',
    country: 'Uganda',
    region: 'East Africa',
    projectCount: 4120,
    countLabel: '4.1k',
    peopleServed: 1_910_000,
    mapX: 579,
    mapY: 312,
    radius: 24,
    gps: '1.3733° N, 32.2903° E',
    featuredVillage: 'Gulu Northern Parish',
    technology: 'Deep Borehole & School Tap',
    completedDate: 'August 2026',
    partner: 'International Lifeline Fund',
    image: '/src/assets/images/story_education_water_1795273195577.jpg',
    summary: 'Clean water points installed directly beside primary schools and rural health clinics.',
  },
  {
    id: 'malawi',
    country: 'Malawi',
    region: 'Southern Africa',
    projectCount: 13200,
    countLabel: '13k',
    peopleServed: 4_190_000,
    mapX: 604,
    mapY: 368,
    radius: 26,
    gps: '13.9626° S, 33.7741° E',
    featuredVillage: 'Mulanje South Valley',
    technology: 'Gravity-Fed Piped Network',
    completedDate: 'September 2026',
    partner: 'Water For People Malawi',
    image: '/src/assets/images/story_economic_water_1795273196131.jpg',
    summary: 'District-wide clean water coverage connecting every village tap stand to protected mountain springs.',
  },
  {
    id: 'pakistan',
    country: 'Pakistan',
    region: 'South Asia',
    projectCount: 483,
    countLabel: '483',
    peopleServed: 215_000,
    mapX: 702,
    mapY: 204,
    radius: 19,
    gps: '30.3753° N, 69.3451° E',
    featuredVillage: 'Tharparkar Oasis',
    technology: 'Solar Reverse-Osmosis Well',
    completedDate: 'June 2026',
    partner: 'IRSP Pakistan',
    image: '/src/assets/images/story_women_water_1795273196005.jpg',
    summary: 'Solar-driven groundwater filtration bringing safe drinking water to arid desert communities.',
  },
  {
    id: 'nepal',
    country: 'Nepal',
    region: 'South Asia',
    projectCount: 19000,
    countLabel: '19k',
    peopleServed: 5_140_000,
    mapX: 758,
    mapY: 214,
    radius: 28,
    gps: '28.2096° N, 83.9856° E',
    featuredVillage: 'Gorkha Hillside Tap',
    technology: 'Gravity-Fed Household Tap',
    completedDate: 'October 2026',
    partner: 'NEWAH Nepal',
    image: '/src/assets/images/action_monthly_spring_1795273194295.jpg',
    summary: 'Household tap connections piping crisp spring water across remote Himalayan mountain ridges.',
  },
  {
    id: 'cambodia',
    country: 'Cambodia',
    region: 'Southeast Asia',
    projectCount: 9800,
    countLabel: '9.8k',
    peopleServed: 3_662_991,
    mapX: 822,
    mapY: 264,
    radius: 25,
    gps: '12.5657° N, 104.9910° E',
    featuredVillage: 'Kampong Thom Province',
    technology: 'BioSand Filter & Drilled Well',
    completedDate: 'September 2026',
    partner: 'Clear Cambodia',
    image: '/src/assets/images/story_health_water_1795273194723.jpg',
    summary: 'Durable household BioSand filtration systems and community wells serving flood-prone river basins.',
  },
];

export const ACTION_CARDS: ActionCardItem[] = [
  {
    id: 'monthly-spring',
    badge: 'THE SPRING',
    label: 'JOIN MONTHLY GIVING',
    title: 'Give clean water every month',
    description:
      'A monthly gift brings clean water to families all year long and funds sustainable local maintenance.',
    ctaLabel: 'Join Today',
    icon: 'spring',
    image: '/src/assets/images/action_monthly_spring_1795273194295.jpg',
    imageAlt: 'Smiling woman standing beside a running clean water tap in the mountains.',
    modalIntent: 'monthly',
  },
  {
    id: 'sponsor-project',
    label: 'SPONSOR A WATER PROJECT',
    title: 'Sponsor a water project',
    description:
      'By sponsoring a project, you can provide clean water for an entire community, school, or health clinic.',
    ctaLabel: 'Sponsor Now',
    icon: 'sponsor',
    image: '/src/assets/images/action_sponsor_project_1795273197337.jpg',
    imageAlt: 'Two joyful women lifting a colorful water basin at a rural community well.',
    modalIntent: 'sponsor',
  },
  {
    id: 'start-fundraiser',
    label: 'START A FUNDRAISER',
    title: 'Start a fundraiser',
    description:
      'Pledge your birthday, run a marathon, or rally friends to bring clean water to communities in need.',
    ctaLabel: 'Get Started',
    icon: 'fundraise',
    image: '/src/assets/images/action_fundraise_team_1795273197399.jpg',
    imageAlt: 'Four smiling friends holding a signature yellow charity: water jerrycan outdoors.',
    modalIntent: 'fundraise',
  },
  {
    id: 'give-fundraiser',
    label: 'GIVE TO A FUNDRAISER',
    title: 'Give to a fundraiser',
    description:
      'Support a community campaign that captures your heart and help fund verified water projects worldwide.',
    ctaLabel: 'Give Today',
    icon: 'gift',
    image: '/src/assets/images/story_education_water_1795273195577.jpg',
    imageAlt: 'Smiling schoolgirls filling clean water bottles at a school tap station.',
    modalIntent: 'once',
  },
  {
    id: 'brand-partner',
    label: 'BECOME A BRAND PARTNER',
    title: 'Become a brand partner',
    description:
      'Work closely with our partnerships team to create customer-facing clean water initiatives with proven impact.',
    ctaLabel: 'Partner With Us',
    icon: 'partner',
    image: '/src/assets/images/story_women_water_1795273196005.jpg',
    imageAlt: 'Women filling bright yellow jerrycans with clear water at a village pump.',
    modalIntent: 'sponsor',
  },
  {
    id: 'honor-someone',
    label: 'HONOR SOMEONE SPECIAL',
    title: 'Honor someone special',
    description:
      'Celebrate a milestone or remember a loved one by giving clean water in their name with a custom e-card.',
    ctaLabel: 'Give in Honor',
    icon: 'honor',
    image: '/src/assets/images/story_economic_water_1795273196131.jpg',
    imageAlt: 'Farmer watering vibrant green crops beside a clean community tap stand.',
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
      { label: 'tiny heroes', action: 'why-water' as const },
      { label: 'students & teachers', action: 'why-water' as const },
      { label: 'advisors', action: 'sponsor' as const },
      { label: 'experience lab', action: 'impact-map' as const },
    ],
  },
  {
    heading: 'get to know us',
    links: [
      { label: 'our work', action: 'impact-map' as const },
      { label: '100% model', action: 'model-100' as const },
      { label: 'see our financials', action: 'model-100' as const },
      { label: 'meet the founder', action: 'model-100' as const },
      { label: 'meet the executive team', action: 'model-100' as const },
      { label: 'careers', action: 'newsletter' as const },
    ],
  },
  {
    heading: 'connect',
    links: [
      { label: 'contact us', action: 'newsletter' as const },
      { label: 'help center', action: 'model-100' as const },
      { label: 'request a speaker', action: 'sponsor' as const },
      { label: 'brand partnerships', action: 'sponsor' as const },
      { label: 'shop our store', action: 'take-action' as const },
    ],
  },
];
