import type { ImpactTotals, CommunityCluster, UpcomingProject } from '../utils/donationLogic';

export interface ProgrammeStory {
  id: 'health' | 'educate' | 'stem' | 'transform';
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
  icon: 'heart' | 'sponsor' | 'fundraise' | 'gift' | 'partner' | 'honor';
  image: string;
  fallbackImage: string;
  imageAlt: string;
  modalIntent: 'monthly' | 'sponsor' | 'fundraise' | 'once';
}

export const BASE_IMPACT_TOTALS: ImpactTotals = {
  peopleServed: 12_400,
  programmes: 4,
  communities: 5,
};

export const PROGRAMME_STORIES: ProgrammeStory[] = [
  {
    id: 'health',
    tabLabel: 'Otoo Health',
    statStatement:
      'Community health screenings reach thousands each year, connecting coastal families to free preventive care, maternal support, and emergency surgeries.',
    linkLabel: 'Explore Otoo Health',
    image: 'https://images.pexels.com/photos/34185202/pexels-photo-34185202.jpeg?auto=format&fit=crop&w=1200&q=85',
    fallbackImage: '/field/health.jpg',
    imageAlt: 'Black Ghanaian health workers conducting screenings in coastal Ghana.',
    detailHeadline: 'Healthcare reaching underserved coastal fishing communities',
    detailBody:
      'Otoo Health delivers free community health screenings, maternal wellness checks, and health education across coastal villages in Ghana, alongside financial support for patients needing urgent hospital procedures and surgeries.',
    proofFacts: [
      { figure: '2,000+', caption: 'Residents screened at Aboadze community clinic' },
      { figure: '100%', caption: 'Of public donations go directly to patient care' },
      { figure: '24/7', caption: 'Emergency medical referral network' },
    ],
  },
  {
    id: 'educate',
    tabLabel: 'Otoo Educate',
    statStatement:
      'School building and educational scholarships remove financial barriers, keeping hundreds of children enrolled and thriving in school.',
    linkLabel: 'Explore Otoo Educate',
    image: 'https://images.pexels.com/photos/14909652/pexels-photo-14909652.jpeg?auto=format&fit=crop&w=1200&q=85',
    fallbackImage: '/field/youth.jpg',
    imageAlt: 'Black Ghanaian schoolchildren smiling in their classroom.',
    detailHeadline: 'Classrooms and scholarships that keep children in school',
    detailBody:
      'Otoo Educate constructs resilient school blocks, equips classrooms with modern desks and books, and provides full scholarships for promising students from coastal fishing families who would otherwise drop out.',
    proofFacts: [
      { figure: '350+', caption: 'Students supported with full academic scholarships' },
      { figure: '6', caption: 'Classrooms under construction in coastal Ghana' },
      { figure: '100%', caption: 'Direct allocation of educational funds' },
    ],
  },
  {
    id: 'stem',
    tabLabel: 'Otoo STEM',
    statStatement:
      'Hands-on robotics, coding, and challenge-based science activities ignite technical curiosity in Ghana’s next generation of engineers.',
    linkLabel: 'Explore Otoo STEM',
    image: 'https://images.pexels.com/photos/33920051/pexels-photo-33920051.jpeg?auto=format&fit=crop&w=1200&q=85',
    fallbackImage: '/field/outreach.jpg',
    imageAlt: 'Black Ghanaian youth working on practical STEM experiments.',
    detailHeadline: 'STEM Challenge for coastal Ghana&rsquo;s youth',
    detailBody:
      'The Otoo STEM Challenge equips rural and coastal schools with digital learning kits, computers, and project-based STEM competitions, empowering boys and girls with 21st-century problem-solving skills.',
    proofFacts: [
      { figure: '12', caption: 'Schools participating in annual STEM challenges' },
      { figure: '1,200+', caption: 'Students trained in practical science and coding' },
      { figure: '50/50', caption: 'Equal gender participation for girls in STEM' },
    ],
  },
  {
    id: 'transform',
    tabLabel: 'Otoo Transform',
    statStatement:
      'Vocational training and micro-enterprise support empower coastal women, youth, and fishing families to achieve economic independence.',
    linkLabel: 'Explore Otoo Transform',
    image: 'https://images.pexels.com/photos/20653716/pexels-photo-20653716.jpeg?auto=format&fit=crop&w=1200&q=85',
    fallbackImage: '/field/community.jpg',
    imageAlt: 'Black Ghanaian women and mothers collaborating in community empowerment.',
    detailHeadline: 'Livelihoods and empowerment for coastal families',
    detailBody:
      'Otoo Transform partners with women fishmongers, artisanal youth, and community elders along Ghana’s coastline, providing small business grants, financial literacy, and community-led development initiatives.',
    proofFacts: [
      { figure: '180+', caption: 'Women entrepreneurs and mothers supported' },
      { figure: '4', caption: 'Coastal towns with active transform initiatives' },
      { figure: '100%', caption: 'Community-led implementation model' },
    ],
  },
];

export const UPCOMING_PROJECTS: UpcomingProject[] = [
  {
    id: 'aboadze-clinic',
    title: 'Aboadze Maternal & Pediatric Health Post',
    type: 'Hospital & Clinic',
    location: 'Aboadze, Western Coast, Ghana',
    target: 15000,
    raised: 10500,
    progress: 70,
    status: 'Construction',
    image: '/photos/cape-coast-clinic.jpg',
    imageAlt: 'Medical team and clinic facility in Aboadze',
    description: 'Constructing a permanent 4-bed maternity wing, cold-chain vaccine storage, and emergency triage room for 6,000+ coastal residents.',
    impact: '6,000+ residents served',
  },
  {
    id: 'elmina-school',
    title: "St. Mary's Coastal Primary School Block",
    type: 'School Build',
    location: 'Elmina, Central Region, Ghana',
    target: 12000,
    raised: 5400,
    progress: 45,
    status: 'Foundation',
    image: '/photos/elmina-school-build.jpg',
    imageAlt: 'Community members preparing school build in Elmina',
    description: 'Building 6 well-ventilated classrooms, sanitation blocks, and 120 dual desks so children no longer study under temporary thatched sheds.',
    impact: '320 schoolchildren',
  },
  {
    id: 'cape-coast-stem',
    title: 'Cape Coast Youth STEM & Robotics Lab',
    type: 'STEM Lab',
    location: 'Cape Coast, Central Region, Ghana',
    target: 8000,
    raised: 2000,
    progress: 25,
    status: 'Fitting Out',
    image: '/photos/stem-education.jpg',
    imageAlt: 'Youth engaging in STEM technology learning',
    description: 'Equipping a dedicated community lab with 20 solar-powered learning laptops, 3D printing kits, and robotics electronics.',
    impact: '500+ youth annually',
  },
  {
    id: 'takoradi-fisherfolk',
    title: 'Takoradi Fisherfolk Healthcare & Welfare Hub',
    type: 'Community Transform',
    location: 'Takoradi Harbor Basin, Ghana',
    target: 10000,
    raised: 3800,
    progress: 38,
    status: 'Active',
    image: '/photos/coastal-fisherfolk.jpg',
    imageAlt: 'Artisanal fishing community along Ghana coast',
    description: 'Providing subsidized first-aid kits, eye health screenings, and children’s tuition relief for artisanal fishing families.',
    impact: '1,500 fisherfolk families',
  },
];

export const COMMUNITY_CLUSTERS: CommunityCluster[] = [
  {
    id: 'aboadze',
    country: 'Ghana',
    region: 'Western Coast, Ghana',
    programmeCount: 4,
    countLabel: '4',
    peopleServed: 5400,
    mapX: 490,
    mapY: 250,
    radius: 28,
    lat: 5.1167,
    lng: -1.7500,
    gps: '5.1167° N, 1.7500° W',
    featuredVillage: 'Aboadze Fishing Community',
    primaryProgramme: 'Otoo Health Post & Screening',
    completedDate: 'Active 2026',
    partner: 'Otoo Foundation Ghana Field Unit',
    image: '/photos/aboadze-health-screening.jpg',
    fallbackImage: '/photos/african-doctor-clinic.jpg',
    summary: 'Regular community health screenings, clinical triage, and youth education programmes serving coastal families in Aboadze.',
  },
  {
    id: 'elmina',
    country: 'Ghana',
    region: 'Central Region, Ghana',
    programmeCount: 3,
    countLabel: '3',
    peopleServed: 3200,
    mapX: 505,
    mapY: 248,
    radius: 24,
    lat: 5.0833,
    lng: -1.3500,
    gps: '5.0833° N, 1.3500° W',
    featuredVillage: 'Elmina Heritage Fisher Sector',
    primaryProgramme: 'Otoo Educate School Build',
    completedDate: 'Active 2026',
    partner: 'Elmina Community Board',
    image: '/photos/elmina-school-build.jpg',
    fallbackImage: '/photos/african-school-children.jpg',
    summary: 'New 6-classroom primary school block and student scholarship cohort supporting children of local fisherfolk.',
  },
  {
    id: 'cape-coast',
    country: 'Ghana',
    region: 'Central Region, Ghana',
    programmeCount: 3,
    countLabel: '3',
    peopleServed: 2800,
    mapX: 520,
    mapY: 245,
    radius: 22,
    lat: 5.1053,
    lng: -1.2466,
    gps: '5.1053° N, 1.2466° W',
    featuredVillage: 'Cape Coast Sub-District',
    primaryProgramme: 'Otoo STEM Challenge & Digital Lab',
    completedDate: 'Active 2026',
    partner: 'Otoo Foundation Ghana',
    image: '/photos/stem-education.jpg',
    fallbackImage: '/photos/black-student-classroom.jpg',
    summary: 'Central hub for robotics competitions, practical engineering challenges, and secondary school science mentorship.',
  },
  {
    id: 'takoradi',
    country: 'Ghana',
    region: 'Western Region, Ghana',
    programmeCount: 3,
    countLabel: '3',
    peopleServed: 2100,
    mapX: 475,
    mapY: 260,
    radius: 20,
    lat: 4.8870,
    lng: -1.7550,
    gps: '4.8870° N, 1.7550° W',
    featuredVillage: 'Takoradi Harbor Community',
    primaryProgramme: 'Otoo Transform & Livelihoods',
    completedDate: 'Active 2026',
    partner: 'Western Region Community Implementers',
    image: '/photos/coastal-fisherfolk.jpg',
    fallbackImage: '/photos/ghanaian-mothers-empowerment.jpg',
    summary: 'Educational scholarships and micro-grants empowering fisherfolk families and young apprentices.',
  },
];

export const FOOTER_COLUMNS = [
  {
    heading: 'Programmes',
    links: [
      { label: 'Otoo Health', action: 'page-programmes' as const },
      { label: 'Otoo Educate', action: 'page-programmes' as const },
      { label: 'Otoo STEM Challenge', action: 'page-programmes' as const },
      { label: 'Otoo Transform', action: 'page-programmes' as const },
      { label: 'Why Coastal Ghana', action: 'why-water' as const },
    ],
  },
  {
    heading: 'Projects & Builds',
    links: [
      { label: 'Upcoming School Builds', action: 'page-programmes' as const },
      { label: 'Aboadze Health Clinic', action: 'impact-map' as const },
      { label: 'Elmina Classrooms', action: 'page-programmes' as const },
      { label: 'Cape Coast STEM Lab', action: 'page-programmes' as const },
      { label: 'Takoradi Fisherfolk Hub', action: 'impact-map' as const },
    ],
  },
  {
    heading: 'Get Involved',
    links: [
      { label: 'The Otoo Circle', action: 'monthly' as const },
      { label: 'Sponsor a School Block', action: 'sponsor' as const },
      { label: 'Start a Fundraiser', action: 'page-fundraise' as const },
      { label: 'Brand Partnerships', action: 'page-contact' as const },
      { label: 'Volunteer in Ghana', action: 'page-contact' as const },
    ],
  },
  {
    heading: 'About & Trust',
    links: [
      { label: 'Our Story & Purpose', action: 'page-about' as const },
      { label: 'Founder & Governance', action: 'page-about' as const },
      { label: '100% Model & Financials', action: 'model-100' as const },
      { label: 'Radical Transparency', action: 'impact-map' as const },
      { label: 'Contact Us', action: 'page-contact' as const },
    ],
  },
];

export const ACTION_CARDS: ActionCardItem[] = [
  {
    id: 'monthly-circle',
    badge: 'THE OTOO CIRCLE',
    label: 'JOIN MONTHLY GIVING',
    title: 'Build futures every month',
    description: 'A monthly gift provides dependable funding so our clinics stay staffed and school builds continue without delay.',
    ctaLabel: 'Join The Circle',
    icon: 'heart',
    image: 'https://images.pexels.com/photos/20653716/pexels-photo-20653716.jpeg?auto=format&fit=crop&w=800&q=85',
    fallbackImage: '/field/community.jpg',
    imageAlt: 'Black Ghanaian women and mothers collaborating in community empowerment.',
    modalIntent: 'monthly',
  },
  {
    id: 'sponsor-classroom',
    label: 'BUILD A CLASSROOM',
    title: 'Sponsor a School Block',
    description: 'Fund building materials, dual desks, and library supplies for an entire primary classroom in Elmina or Aboadze.',
    ctaLabel: 'Sponsor Now',
    icon: 'sponsor',
    image: 'https://images.pexels.com/photos/14909652/pexels-photo-14909652.jpeg?auto=format&fit=crop&w=800&q=85',
    fallbackImage: '/field/youth.jpg',
    imageAlt: 'Black Ghanaian schoolchildren in classroom.',
    modalIntent: 'sponsor',
  },
  {
    id: 'fund-clinic',
    label: 'HEALTHCARE POST',
    title: 'Equip a Coastal Clinic',
    description: 'Help furnish cold-chain vaccine storage, maternity beds, and essential diagnostic kits for coastal clinics.',
    ctaLabel: 'Fund Healthcare',
    icon: 'sponsor',
    image: 'https://images.pexels.com/photos/34185202/pexels-photo-34185202.jpeg?auto=format&fit=crop&w=800&q=85',
    fallbackImage: '/field/health.jpg',
    imageAlt: 'Black healthcare professional caring for children in clinic.',
    modalIntent: 'sponsor',
  },
  {
    id: 'start-fundraiser',
    label: 'START A CAMPAIGN',
    title: 'Pledge Your Milestone',
    description: 'Rally friends, dedicate your birthday, or organize a community run to fund education and health in Ghana.',
    ctaLabel: 'Start A Campaign',
    icon: 'fundraise',
    image: 'https://images.pexels.com/photos/33920051/pexels-photo-33920051.jpeg?auto=format&fit=crop&w=800&q=85',
    fallbackImage: '/field/outreach.jpg',
    imageAlt: 'Black students doing robotics and science.',
    modalIntent: 'fundraise',
  },
  {
    id: 'sponsor-stem',
    label: 'STEM CHALLENGE',
    title: 'Sponsor Student Innovators',
    description: 'Provide STEM challenge kits, micro-controllers, and lab materials for coastal school science competitions.',
    ctaLabel: 'Power STEM',
    icon: 'gift',
    image: '/photos/stem-education.jpg',
    fallbackImage: '/photos/african-school-children.jpg',
    imageAlt: 'Black students doing robotics and science.',
    modalIntent: 'sponsor',
  },
  {
    id: 'brand-partner',
    label: 'BRAND PARTNERSHIPS',
    title: 'Partner with Otoo Foundation',
    description: 'Create impactful corporate giving programmes with radical transparency and verified community outcomes.',
    ctaLabel: 'Partner With Us',
    icon: 'partner',
    image: '/photos/ghanaian-mothers-empowerment.jpg',
    fallbackImage: '/photos/coastal-fisherfolk.jpg',
    imageAlt: 'Ghanaian community leaders collaborating.',
    modalIntent: 'sponsor',
  },
];
