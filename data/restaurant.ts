export const restaurant = {
  name: 'El Mariachi',
  tagline: 'Family owned and operated',
  description:
    'El Mariachi is a family owned and operated Mexican restaurant in Prattville, Alabama — serving fajitas, enchiladas, tacos, margaritas and more, six days a week.',
  phone: '(334) 361-5121',
  phoneHref: 'tel:+13343615121',
  address: {
    street: '1675 Hwy 31 North',
    city: 'Prattville',
    state: 'AL',
    zip: '36067',
  },
  mapsHref:
    'https://www.google.com/maps/dir/?api=1&destination=1675+Hwy+31+N,+Prattville,+AL+36067',
  facebook: 'El Mariachi Mexican Restaurant',
  hours: [
    { day: 'Monday', open: '11:00 AM', close: '8:00 PM', closed: false },
    { day: 'Tuesday', open: '11:00 AM', close: '9:00 PM', closed: false },
    { day: 'Wednesday', open: '11:00 AM', close: '9:00 PM', closed: false },
    { day: 'Thursday', open: '11:00 AM', close: '9:00 PM', closed: false },
    { day: 'Friday', open: '11:00 AM', close: '9:00 PM', closed: false },
    { day: 'Saturday', open: '11:00 AM', close: '9:00 PM', closed: false },
    { day: 'Sunday', open: null, close: null, closed: true },
  ],
  lunchHours: 'Monday – Friday · 11 AM – 2 PM',
  notices: [
    'Extras and/or substitutions are subject to an extra charge.',
    '$0.25 will be added to each item on to-go orders.',
    'All card payments have a 3.5% fee added.',
    'First order of chips & salsa is free with purchase of a lunch or dinner entrée. Extra chips: $1.00 each. Extra salsa: $0.75 each.',
  ],
  drinkNotices: [
    'All drinks must be paid once ordered, no exchanges or refunds.',
    'Must be 21 or older to order a drink.',
  ],
  healthAdvisory:
    'Consuming raw or undercooked meat, poultry, seafood, shell-fish or eggs may increase your risk of food borne illness, especially if you have certain medical conditions.',
} as const;

export const navigation = [
  { href: '/', label: 'Home' },
  { href: '/menu', label: 'Menu' },
  { href: '/drinks', label: 'Drinks' },
  { href: '/visit', label: 'Visit' },
];
