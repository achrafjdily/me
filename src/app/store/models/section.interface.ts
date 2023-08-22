export interface Section {
  name: string,
  icon: string,
  anchor: string
}

export interface CurrentSection{
  index : number,
  section : Section
}

export const IntroSectionId = 'introduction';
export const EduExpSectionId = 'eduexp';
export const TechStackSectionId = 'tech-stack';
export const ProjectsSectionId = 'some-works';
export const TestimonialsSectionId = 'testimonials';
export const ContactSectionId = 'contact';

export const sections: Section[] = [
  {
    name: 'Introduction',
    icon: 'badge_outline',
    anchor: IntroSectionId,
  },
  {
    name: 'Education & Experience',
    icon: 'work',
    anchor: EduExpSectionId,
  },
  {
    name: 'Tech Stack',
    icon: 'integration_instructions',
    anchor: TechStackSectionId,
  },
  {
    name: 'Some Works',
    icon: 'widgets',
    anchor: ProjectsSectionId,
  },
  {
    name: 'Testimonials',
    icon: 'format_quote',
    anchor: TestimonialsSectionId,
  },
  {
    name: 'Contact',
    icon: 'contact_mail',
    anchor: ContactSectionId,
  },
];
