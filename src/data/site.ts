// Site-wide settings and the five sections of What Yoga Is.
export const SITE = {
  name: 'What Yoga Is',
  url: 'https://whatyogais.com',
  tagline: 'Yoga as it is, from where it began.',
  author: 'Sameer Regmi',
  email: 'hello@whatyogais.com',
};

export interface Section {
  slug: string;
  name: string;
  dev: string;   // Devanagari word for the section
  iast: string;  // its transliteration
  summary: string;
}

export const sections: Section[] = [
  { slug: 'what-yoga-is', name: 'What yoga is', dev: 'योग', iast: 'yoga', summary: 'The meaning of the word, the goal of the practice and the eight limbs that lead there.' },
  { slug: 'beyond-the-mat', name: 'Beyond the mat', dev: 'साधना', iast: 'sādhanā', summary: 'Breath, meditation, mantra and ethics: the practices most classes leave out.' },
  { slug: 'lost-in-translation', name: 'Lost in translation', dev: 'अनुवाद', iast: 'anuvāda', summary: 'What changed as yoga travelled west, and why the parts that sell got the spotlight.' },
  { slug: 'the-texts', name: 'The texts', dev: 'शास्त्र', iast: 'śāstra', summary: 'The Yoga Sutras, the Bhagavad Gita and the Hatha Yoga Pradipika, explained plainly.' },
  { slug: 'stories', name: 'Stories', dev: 'कथा', iast: 'kathā', summary: 'The Puranic stories behind the temples and festivals, and the deeper meaning the tradition reads in them.' },
  { slug: 'himalayan-roots', name: 'Himalayan roots', dev: 'हिमालय', iast: 'himālaya', summary: 'The places, lineages and living practitioners of yoga in the Himalaya.' },
];

export const sectionBySlug = (s: string) => sections.find((x) => x.slug === s);

export const fmtDate = (d: Date) =>
  d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
