export interface Lang{
  abbrv : string,
  icon : string,
  name : string,
  level : string
}

export const langs : Lang[] = [
  {
    abbrv: 'en',
    name : 'English',
    level : 'Professional & fluent usage',
    icon: 'https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/6.7.0/flags/4x3/gb.svg'
  },
  {
    abbrv: 'fr',
    name : 'French',
    level : 'Professional & fluent usage',
    icon: 'https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/6.7.0/flags/4x3/fr.svg'
  },
  {
    abbrv: 'ar',
    name : 'Arabic',
    level : 'First language',
    icon: 'https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/6.7.0/flags/4x3/sa.svg'
  },
]
