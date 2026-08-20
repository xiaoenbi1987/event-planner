import type { Category, Vendor } from '../types'

export const CATEGORIES: Category[] = [
  { id: 'venue', label: 'Venue', hint: 'Rooms, gardens and halls by the hour' },
  { id: 'photographer', label: 'Photographer', hint: 'Cover only the hours that matter' },
  { id: 'dj', label: 'Music DJ', hint: 'Sets, sound system and lights' },
  { id: 'makeup', label: 'Makeup Artist', hint: 'Getting ready, on location' },
  { id: 'chef', label: 'Food Chef', hint: 'Cooking and service on site' },
]

export const VENDORS: Vendor[] = [
  // Venue
  {
    id: 'venue-quinta',
    category: 'venue',
    name: 'Quinta das Oliveiras',
    meta: 'Garden terrace · up to 120 guests · Belem',
    rate: 180,
    bio: 'An olive grove terrace with a covered pavilion, long tables and string lights already in place. Tables, chairs and basic sound are included in the hourly rate, and the kitchen is open to any chef you bring.',
    placeholder: 'VENUE / GARDEN TERRACE',
    slots: ['12:00', '14:00', '16:00', '18:00'],
    reviews: [
      { author: 'Ines M.', rating: 5, text: 'We booked five hours for a 70-person wedding and never felt rushed. Setup was ready an hour before we arrived.' },
      { author: 'Tomas R.', rating: 4, text: 'Beautiful at sunset. Parking is a short walk away, so tell older guests in advance.' },
    ],
  },
  {
    id: 'venue-atelier',
    category: 'venue',
    name: 'Atelier 14',
    meta: 'Loft studio · up to 60 guests · Alcantara',
    rate: 120,
    bio: 'A white-walled loft with tall windows and a small bar. Comes with a projector, a folding table set and a service lift, which makes load-in easy for caterers.',
    placeholder: 'VENUE / LOFT STUDIO',
    slots: ['10:00', '13:00', '16:00', '19:00'],
    reviews: [
      { author: 'Rita C.', rating: 5, text: 'Perfect for a birthday of about fifty. The light in the afternoon is genuinely lovely.' },
      { author: 'Diogo S.', rating: 4, text: 'Great space, but the sound bounces. A DJ with proper speakers makes a real difference.' },
    ],
  },
  {
    id: 'venue-casa-azul',
    category: 'venue',
    name: 'Casa Azul Rooftop',
    meta: 'Rooftop · up to 80 guests · Graca',
    rate: 210,
    bio: 'A tiled rooftop over the old town with river views on two sides. Includes a covered lounge for weather, a bar counter and a lift straight from the street.',
    placeholder: 'VENUE / ROOFTOP',
    slots: ['15:00', '17:00', '19:00', '21:00'],
    reviews: [
      { author: 'Sofia L.', rating: 5, text: 'The view did half the decorating for us. Staff handled the wind screens without being asked.' },
      { author: 'Marco V.', rating: 4, text: 'Pricey per hour, but we only needed four hours, so it worked out.' },
    ],
  },
  {
    id: 'venue-salao',
    category: 'venue',
    name: 'Salao Ribeira',
    meta: 'Function hall · up to 150 guests · Cais do Sodre',
    rate: 150,
    bio: 'A classic wood-floored hall with a stage, a cloakroom and a prep kitchen. The most flexible option for larger guest counts, and the easiest to reach by train.',
    placeholder: 'VENUE / FUNCTION HALL',
    slots: ['11:00', '14:00', '17:00', '20:00'],
    reviews: [
      { author: 'Helena P.', rating: 4, text: 'Plain but honest. We spent the savings on food and nobody missed the decor.' },
      { author: 'Andre F.', rating: 5, text: 'The stage made the speeches work. Good acoustics for a room that size.' },
    ],
  },

  // Photographer
  {
    id: 'photo-amara',
    category: 'photographer',
    name: 'Amara Reis',
    meta: 'Documentary style · 9 years · 2 cameras',
    rate: 120,
    bio: 'Documentary photographer who works without posing or direction. Books short, focused blocks around the ceremony and the first hour of the party, and delivers edited photographs within ten days.',
    placeholder: 'PORTFOLIO / DOCUMENTARY',
    slots: ['13:00', '15:00', '16:00', '18:00'],
    reviews: [
      { author: 'Joana T.', rating: 5, text: 'Three hours was exactly right. She caught the parts we were too busy to see ourselves.' },
      { author: 'Pedro A.', rating: 5, text: 'Never in the way, never missing. Photos arrived a week early.' },
    ],
  },
  {
    id: 'photo-luca',
    category: 'photographer',
    name: 'Luca Ferreira',
    meta: 'Editorial portraits · 6 years · studio lights',
    rate: 95,
    bio: 'Portrait-led photographer who brings a small lighting kit and works through a shot list with you beforehand. Best for events where group photographs matter more than candid coverage.',
    placeholder: 'PORTFOLIO / EDITORIAL',
    slots: ['12:00', '14:00', '17:00', '19:00'],
    reviews: [
      { author: 'Carla N.', rating: 4, text: 'Very organised. We got every family combination done in forty minutes.' },
      { author: 'Nuno B.', rating: 5, text: 'The lit portraits look far better than anything we expected at this rate.' },
    ],
  },
  {
    id: 'photo-mira',
    category: 'photographer',
    name: 'Mira Santos',
    meta: 'Film and digital · 12 years · second shooter',
    rate: 165,
    bio: 'Shoots a mix of 35mm film and digital, and brings a second shooter on bookings of four hours or more. Slower, more deliberate coverage for people who like grain and warmth.',
    placeholder: 'PORTFOLIO / FILM + DIGITAL',
    slots: ['11:00', '14:00', '16:00', '18:00'],
    reviews: [
      { author: 'Beatriz G.', rating: 5, text: 'The film frames are the ones hanging in our hallway. Worth the higher rate.' },
      { author: 'Hugo D.', rating: 4, text: 'Film scans took three weeks. Beautiful, but do not plan thank-you cards around them.' },
    ],
  },
  {
    id: 'photo-noor',
    category: 'photographer',
    name: 'Noor Haddad',
    meta: 'Events and parties · 4 years · fast turnaround',
    rate: 70,
    bio: 'Straightforward event coverage with same-week delivery. Works well for birthdays and graduations where you want a solid gallery quickly and without a long planning call.',
    placeholder: 'PORTFOLIO / EVENTS',
    slots: ['15:00', '17:00', '19:00', '21:00'],
    reviews: [
      { author: 'Filipa R.', rating: 4, text: 'Great value. Two hundred usable photos from a two-hour booking.' },
      { author: 'Ricardo M.', rating: 4, text: 'Friendly with a crowd of teenagers, which is not nothing.' },
    ],
  },

  // Music DJ
  {
    id: 'dj-vela',
    category: 'dj',
    name: 'DJ Vela',
    meta: 'House and disco · own PA · 8 years',
    rate: 110,
    bio: 'Brings a full PA, two subwoofers and simple lighting, and reads the room rather than running a fixed set. Takes requests up to an hour before the last track.',
    placeholder: 'SET / HOUSE + DISCO',
    slots: ['19:00', '20:00', '21:00', '22:00'],
    reviews: [
      { author: 'Marta S.', rating: 5, text: 'Four hours and the floor never emptied. The gear he brings is properly loud.' },
      { author: 'Bruno L.', rating: 4, text: 'Needed a little nudging to move off house early on, then he was perfect.' },
    ],
  },
  {
    id: 'dj-kito',
    category: 'dj',
    name: 'Kito Sound',
    meta: 'Afrobeats and pop · own PA · 5 years',
    rate: 85,
    bio: 'Afrobeats, amapiano and chart pop, with a microphone for speeches and announcements included. A good fit for mixed-age crowds and shorter parties.',
    placeholder: 'SET / AFROBEATS + POP',
    slots: ['18:00', '20:00', '21:00', '23:00'],
    reviews: [
      { author: 'Ana P.', rating: 5, text: 'Handled the speeches and the dancing. Everyone from nine to seventy was up.' },
      { author: 'Tiago C.', rating: 4, text: 'Setup took a bit longer than promised, so book him an hour ahead of guests.' },
    ],
  },
  {
    id: 'dj-lumen',
    category: 'dj',
    name: 'Lumen Collective',
    meta: 'Two DJs · lighting rig · 10 years',
    rate: 160,
    bio: 'A pair of DJs who swap through the night with a proper moving-head lighting rig. Best for larger rooms where a single deck and a speaker would get lost.',
    placeholder: 'SET / DUO + LIGHTS',
    slots: ['20:00', '21:00', '22:00', '23:00'],
    reviews: [
      { author: 'Cristina F.', rating: 5, text: 'The lighting turned a plain hall into a club. Genuinely transformed the room.' },
      { author: 'Vasco R.', rating: 4, text: 'Expensive per hour, but two of them means the energy never dips.' },
    ],
  },
  {
    id: 'dj-selma',
    category: 'dj',
    name: 'Selma Duarte',
    meta: 'Vinyl · soul and funk · 15 years',
    rate: 130,
    bio: 'All vinyl, all soul, funk and Brazilian records. Plays at conversation volume for the first hours and lifts it later, which is a natural fit for dinners and anniversaries.',
    placeholder: 'SET / VINYL SOUL',
    slots: ['17:00', '19:00', '20:00', '22:00'],
    reviews: [
      { author: 'Luisa V.', rating: 5, text: 'People asked about the music all night. She got the volume exactly right during dinner.' },
      { author: 'Jorge A.', rating: 5, text: 'Fifteen years of records shows. Nothing predictable in three hours.' },
    ],
  },

  // Makeup Artist
  {
    id: 'makeup-elena',
    category: 'makeup',
    name: 'Elena Voss',
    meta: 'Bridal · on location · 11 years',
    rate: 90,
    bio: 'Bridal and long-wear makeup, travelling to wherever you are getting ready. One hour covers one full face, and extra hours cover the rest of the party.',
    placeholder: 'LOOKS / BRIDAL',
    slots: ['08:00', '09:00', '10:00', '12:00'],
    reviews: [
      { author: 'Sara Q.', rating: 5, text: 'Still looked fresh at midnight after a very warm September day.' },
      { author: 'Mariana E.', rating: 5, text: 'Calm, quick, and she listened when I said I wanted it light.' },
    ],
  },
  {
    id: 'makeup-june',
    category: 'makeup',
    name: 'June Okafor',
    meta: 'Editorial and bold looks · 7 years',
    rate: 75,
    bio: 'Colour-forward, editorial makeup with a deep shade range. Happy to do several guests in a session and to work from reference images you send ahead.',
    placeholder: 'LOOKS / EDITORIAL',
    slots: ['09:00', '11:00', '13:00', '15:00'],
    reviews: [
      { author: 'Kemi A.', rating: 5, text: 'Finally an artist whose foundation range actually matched. Photographed beautifully.' },
      { author: 'Teresa M.', rating: 4, text: 'Did four of us in two hours, which was tight but she managed it.' },
    ],
  },
  {
    id: 'makeup-priya',
    category: 'makeup',
    name: 'Priya Nair',
    meta: 'Hair and makeup · 9 years · kit included',
    rate: 110,
    bio: 'Does hair and makeup together, which usually saves an hour over booking two people. Brings a full kit including hairpieces and a portable chair.',
    placeholder: 'LOOKS / HAIR + MAKEUP',
    slots: ['07:00', '09:00', '11:00', '14:00'],
    reviews: [
      { author: 'Aisha K.', rating: 5, text: 'One person for both meant one schedule to manage. Worth every euro.' },
      { author: 'Catarina B.', rating: 4, text: 'The updo held through a windy rooftop evening.' },
    ],
  },
  {
    id: 'makeup-tobi',
    category: 'makeup',
    name: 'Tobi Lindqvist',
    meta: 'Natural finish · 5 years · fast sessions',
    rate: 60,
    bio: 'Light, natural makeup in short sessions. The affordable option when you want to look like yourself in photographs rather than made up.',
    placeholder: 'LOOKS / NATURAL',
    slots: ['08:00', '10:00', '12:00', '16:00'],
    reviews: [
      { author: 'Elsa J.', rating: 4, text: 'Exactly what I asked for: nothing heavy, no glitter, done in forty minutes.' },
      { author: 'Rui O.', rating: 4, text: 'Booked for a graduation. Simple, quick, no fuss.' },
    ],
  },

  // Food Chef
  {
    id: 'chef-marco',
    category: 'chef',
    name: 'Chef Marco Pires',
    meta: 'Portuguese seafood · up to 80 covers',
    rate: 140,
    bio: 'Cooks a seafood-led Portuguese menu on site, with one assistant included from three hours. Ingredients are billed separately at cost after the menu is agreed.',
    placeholder: 'MENU / PORTUGUESE SEAFOOD',
    slots: ['12:00', '15:00', '17:00', '19:00'],
    reviews: [
      { author: 'Goncalo T.', rating: 5, text: 'Cooked for sixty out of a small kitchen without a single delay.' },
      { author: 'Ivo M.', rating: 4, text: 'Remember the ingredients are separate, so budget for that up front.' },
    ],
  },
  {
    id: 'chef-yara',
    category: 'chef',
    name: 'Yara Mendes',
    meta: 'Vegetarian and vegan · up to 60 covers',
    rate: 105,
    bio: 'Fully vegetarian menus built around what is in season, with vegan and gluten-free versions of every dish. Sets up a shared-plate table rather than plated courses.',
    placeholder: 'MENU / VEGETARIAN',
    slots: ['11:00', '13:00', '16:00', '18:00'],
    reviews: [
      { author: 'Leonor S.', rating: 5, text: 'Half our guests eat meat and nobody noticed there was none. That is the review.' },
      { author: 'Paulo N.', rating: 5, text: 'The shared table kept people moving and talking. Great call.' },
    ],
  },
  {
    id: 'chef-omar',
    category: 'chef',
    name: 'Omar Haddadi',
    meta: 'Grill and mezze · up to 120 covers',
    rate: 125,
    bio: 'Live-fire grill and mezze spreads cooked in front of guests. Needs outdoor space or good extraction, and brings his own grill, gas and service staff.',
    placeholder: 'MENU / GRILL + MEZZE',
    slots: ['13:00', '16:00', '18:00', '20:00'],
    reviews: [
      { author: 'Salma R.', rating: 5, text: 'The grill became the centre of the party. Food kept coming for four hours.' },
      { author: 'Duarte L.', rating: 4, text: 'Check your venue allows open flame before booking. Ours nearly did not.' },
    ],
  },
  {
    id: 'chef-hana',
    category: 'chef',
    name: 'Hana Sato',
    meta: 'Small plates and desserts · up to 40 covers',
    rate: 95,
    bio: 'Canapes, small plates and a dessert table for smaller gatherings. Works alone, so best under forty guests, and can be booked for the dessert hour only.',
    placeholder: 'MENU / SMALL PLATES',
    slots: ['14:00', '16:00', '18:00', '20:00'],
    reviews: [
      { author: 'Miriam F.', rating: 5, text: 'Booked her for two hours of dessert at an anniversary. Everything was gone.' },
      { author: 'Alex P.', rating: 4, text: 'One person for forty guests is the real limit, so do not push past it.' },
    ],
  },
]

export function vendorsInCategory(category: string): Vendor[] {
  return VENDORS.filter((v) => v.category === category)
}

export function vendorById(id: string): Vendor | undefined {
  return VENDORS.find((v) => v.id === id)
}

/** Lowest hourly rate in a category, used for the "from $X/hr" line on Plan. */
export function lowestRate(category: string): number {
  return Math.min(...vendorsInCategory(category).map((v) => v.rate))
}
