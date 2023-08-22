import { alpineJs, angular, ionic, laravel, php, tailwindcss, TechItem, vue } from "./tech-item.interface";

export interface Project {
  title: string,
  description: string[],
  techs: TechItem[],
  image: string,
  link?: string
}

export const projects: Project[] = [
  {
    title: 'Kobail real estate management',
    description: [
      "Kobail is an innovative online rental management agency, capable of blending the digital world with local services. Our model significantly reduces costs and saves time for everyone involved in the rental process.",
    ],
    techs: [php, laravel, vue, tailwindcss],
    image: "/assets/imgs/projects/kobail.png",
    link: "https://www.kobail.fr/"
  },
  {
    title: 'ImmoFind real estate matching',
    description: [
      'A real estate matching system to ease & simplify real estate searching for end-users.',
      "By implementing advanced filtering & accurate suggesting systems, ImmoFind provides an innovative & pioneering experience unmatched within the moroccan market."
    ],
    techs: [php, laravel, vue, alpineJs, tailwindcss],
    image: "/assets/imgs/projects/immofind.jpg",
    link: 'https://immofind.ma/'
  },
  {
    title: 'Photosun Showcase with a custom CMS',
    description: ['A showcase website to display Photosun products & services in an elegant & simple UI with a custom made cms & admin panel to manage the content & review contact requests.'],
    techs: [php, laravel, alpineJs, tailwindcss],
    image: "/assets/imgs/projects/photosun.png",
  },
  {
    title: 'Cosmy e-commerce mobile app',
    description: ["Cosmy hair salon e-commerce mobile app with other features (blog, chat, booking appointments...) with a backoffice for management"],
    techs: [php, laravel, angular, ionic, tailwindcss],
    image: "/assets/imgs/projects/cosmy.png"
  },
  {
    title: 'Moenn Landing page',
    description: ['Landing page for Moenn ( an It services company )'],
    techs: [angular, tailwindcss],
    image: "/assets/imgs/projects/moenn.png"
  },
]
