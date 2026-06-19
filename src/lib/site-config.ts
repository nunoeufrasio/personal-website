// Central place for site content placeholders.
// Swap these out as real copy, links, and work items come in.

export const siteConfig = {
  name: 'Nuno Eufrasio',
  role: 'Product Designer',
  intro:
    'I design clear, useful product experiences — from first sketch to shipped interface.',
  email: 'hello@example.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/',
    github: 'https://github.com/nunoeufrasio',
  },
  nav: [
    { label: 'Work', href: '#work' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ],
} as const

export type WorkItem = {
  title: string
  category: string
  description: string
}

// Placeholder portfolio entries — real projects + screenshots to come.
export const workItems: WorkItem[] = [
  {
    title: 'Project One',
    category: 'Product Design',
    description: 'Short placeholder description of a selected project.',
  },
  {
    title: 'Project Two',
    category: 'UX / UI',
    description: 'Short placeholder description of a selected project.',
  },
  {
    title: 'Project Three',
    category: 'Design System',
    description: 'Short placeholder description of a selected project.',
  },
  {
    title: 'Project Four',
    category: 'Mobile App',
    description: 'Short placeholder description of a selected project.',
  },
]
