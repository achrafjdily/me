import slugify from '@sindresorhus/slugify';

export interface Section {
  name: string,
  icon: string,
  anchor : string
}

export const sections: Section[] = [
  {
    name: 'Introduction',
    icon: 'badge_outline'
  },
  {
    name: 'Education & Experience',
    icon: 'work'
  },
  {
    name: 'Tech Stack',
    icon: 'integration_instructions'
  },
  {
    name: 'Some Works',
    icon: 'widgets'
  },
  {
    name: 'Testimonials',
    icon: 'format_quote'
  },
  {
    name: 'Contact',
    icon: 'contact_mail'
  },
].map(section => {
  return {
    ...section,
    anchor : slugify(section.name)
  }
})
