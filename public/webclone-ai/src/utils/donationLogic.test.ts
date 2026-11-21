import test from 'node:test';
import assert from 'node:assert/strict';
import {
  calculatePeopleServed,
  formatCurrencyAmount,
  validateDonationAmount,
  validateDonorDetails,
  validateNewsletterForm,
  canEnableBirthdayReminder,
  filterProjectClusters,
  computeImpactTotals,
  type WaterProjectCluster,
} from './donationLogic';

test('calculatePeopleServed computes accurate annual impact for monthly and one-time gifts', () => {
  // £20/mo * 12 = £240 / £30 = 8 people (matches charity: water UK exact figure)
  assert.equal(calculatePeopleServed(20, 'monthly', 'GBP'), 8);
  // $40/mo * 12 = $480 / $40 = 12 people
  assert.equal(calculatePeopleServed(40, 'monthly', 'USD'), 12);
  // $100 one-time / $40 = 2.5 -> 3 people
  assert.equal(calculatePeopleServed(100, 'once', 'USD'), 3);
  // Small positive gift still gives at least 1 person
  assert.equal(calculatePeopleServed(5, 'once', 'USD'), 1);
  // Invalid or zero amount returns 0
  assert.equal(calculatePeopleServed(0, 'monthly', 'USD'), 0);
  assert.equal(calculatePeopleServed(-15, 'once', 'GBP'), 0);
});

test('formatCurrencyAmount formats USD and GBP cleanly', () => {
  assert.equal(formatCurrencyAmount(40, 'USD'), '$40');
  assert.equal(formatCurrencyAmount(20, 'GBP'), '£20');
  assert.equal(formatCurrencyAmount(1500, 'USD'), '$1,500');
  assert.equal(formatCurrencyAmount(12.5, 'GBP'), '£12.50');
});

test('validateDonationAmount enforces minimum and upper bounds', () => {
  assert.equal(validateDonationAmount(25, 'USD').valid, true);
  assert.equal(validateDonationAmount(0, 'USD').valid, false);
  assert.equal(validateDonationAmount(1, 'GBP').valid, false);
  assert.equal(validateDonationAmount(2_000_000, 'USD').valid, false);
});

test('validateDonorDetails rejects invalid inputs and accepts valid donor info', () => {
  assert.equal(validateDonorDetails('', 'bad-email').valid, false);
  assert.equal(validateDonorDetails('A', 'test@example.com').valid, false);
  assert.equal(validateDonorDetails('Maya Lin', 'maya@example.org').valid, true);
});

test('validateNewsletterForm and birthday reminder gating work accurately', () => {
  assert.equal(canEnableBirthdayReminder({ birthMonth: '', birthDay: '' }), false);
  assert.equal(canEnableBirthdayReminder({ birthMonth: 'March', birthDay: '14' }), true);

  const emptyCheck = validateNewsletterForm({
    firstName: '',
    lastName: '',
    email: 'invalid',
    birthMonth: '',
    birthDay: '',
    birthYear: '',
    birthdayReminder: false,
  });
  assert.equal(emptyCheck.valid, false);
  assert.ok(emptyCheck.errors.firstName);
  assert.ok(emptyCheck.errors.lastName);
  assert.ok(emptyCheck.errors.email);

  const validCheck = validateNewsletterForm({
    firstName: 'Jordan',
    lastName: 'Reed',
    email: 'jordan.reed@example.com',
    birthMonth: 'June',
    birthDay: '12',
    birthYear: '1994',
    birthdayReminder: true,
  });
  assert.equal(validCheck.valid, true);
});

test('filterProjectClusters filters by country and free-text query', () => {
  const sample: WaterProjectCluster[] = [
    {
      id: 'eth',
      country: 'Ethiopia',
      region: 'East Africa',
      projectCount: 13000,
      countLabel: '13k',
      peopleServed: 4120000,
      mapX: 600,
      mapY: 260,
      radius: 26,
      gps: '13.4967° N, 39.4753° E',
      featuredVillage: 'Tigray Highlands',
      technology: 'Drilled Well',
      completedDate: 'August 2026',
      partner: 'REST',
      image: '/img.jpg',
      summary: 'Clean water for rural highlands.',
    },
    {
      id: 'npl',
      country: 'Nepal',
      region: 'South Asia',
      projectCount: 19000,
      countLabel: '19k',
      peopleServed: 3890000,
      mapX: 745,
      mapY: 205,
      radius: 28,
      gps: '28.2096° N, 83.9856° E',
      featuredVillage: 'Kaski Valley',
      technology: 'Gravity-Fed Piped System',
      completedDate: 'September 2026',
      partner: 'NEWAH',
      image: '/img2.jpg',
      summary: 'Piped clean water to hillside households.',
    },
  ];

  assert.equal(filterProjectClusters(sample, 'ALL', '').length, 2);
  assert.equal(filterProjectClusters(sample, 'Ethiopia', '').length, 1);
  assert.equal(filterProjectClusters(sample, 'ALL', 'gravity').length, 1);
  assert.equal(filterProjectClusters(sample, 'ALL', 'kaski')[0].country, 'Nepal');
  assert.equal(filterProjectClusters(sample, 'Nepal', 'Tigray').length, 0);
});

test('computeImpactTotals increments people served and water projects with user pledges', () => {
  const updated = computeImpactTotals(
    { peopleServed: 22_051_391, waterProjects: 218_691, countries: 29 },
    [
      {
        id: 'don-1',
        amount: 40,
        frequency: 'monthly',
        currency: 'USD',
        peopleServed: 12,
        donorName: 'Alex',
        donorEmail: 'alex@example.com',
        timestamp: '2026-11-21',
      },
    ]
  );
  assert.equal(updated.peopleServed, 22_051_403);
  assert.equal(updated.waterProjects, 218_692);
  assert.equal(updated.countries, 29);
});
