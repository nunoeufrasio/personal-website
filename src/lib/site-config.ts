// Central place for site content placeholders.
// Swap these out as real copy, links, and assets come in.

export const siteConfig = {
  name: 'Nuno Eufrasio',
  // Short name shown as the hero headline (rendered with a trailing period).
  shortName: 'Nuno',
  role: 'Product Designer',
  email: 'hello@example.com',
  // Link to a hosted résumé (PDF, Drive, etc.). '#' until provided.
  resumeUrl: '#',
  // Portrait shown in the hero band. Drop an image into src/assets and
  // import it here, or point to a public path. Empty = placeholder.
  portrait: '' as string,
  // Intro copy, reused above and below the portrait.
  intro: [
    'Passionate about crafting digital user experiences. My work is focused on translating user needs and business requirements into engaging experiences, with usability, accessibility, and aesthetics always in mind.',
  ],
} as const
