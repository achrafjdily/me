import moment, { Moment } from "moment";
import { alpineJs, angular, docker, git, github, gitlab, ionic, js, laravel, php, TechItem, ts, vue } from "./tech-item.interface";

export interface TimeLineItem {
  start: Moment,
  end?: Moment,
  institute: {
    name: string,
    link?: string
  },
  job?: {
    remote: boolean,
    time: 'Part time' | 'Full time'
  },
  title: string,
  techs?: TechItem[],
  description?: string,
  tasks?: string[]
}

export const eduTimeLine: TimeLineItem[] = [
  {
    start: moment("2019-09"),
    end: moment("2020-07"),
    institute: {
      name: 'Faculty of Science and Technology - Settat',
    },
    title: "Professional bachelor's degree : Database administration & Web technologies"
  },
  {
    start: moment("2017-09"),
    end: moment("2019-07"),
    institute: {
      name: 'OFPPT - SIAT NICT sidi maârouf 2',
    },
    title: "Specialized technician's degree : multimedia & web development"
  },
  {
    start: moment("2015-06"),
    institute: {
      name: 'al-Mokhtar Soussi High School',
    },
    title: 'Baccalaureate in physical sciences'
  },
]

export const expTimeLine: TimeLineItem[] = [
  {
    start: moment("2020-09"),
    end: moment("2023-07"),
    institute: {
      name: 'Promy',
      link: 'https://promy.fr'
    },
    title: 'Full Stack web developer',
    techs: [
      php, laravel, js, vue, git, gitlab, docker
    ],
    job: {
      remote: true,
      time: 'Full time'
    },
    tasks: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
      'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
      'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.',
      'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.',
    ]
  },
  {
    start: moment("2023-01"),
    end: moment("2023-04"),
    institute: {
      name: 'Immofind',
      link: 'https://immofind.ma'
    },
    title: 'Full Stack web developer',
    techs: [
      php, laravel, js, alpineJs, git, gitlab, docker
    ],
    job: {
      remote: true,
      time: 'Part time'
    }
  },
  {
    start: moment("2021-04"),
    end: moment("2021-08"),
    institute: {
      name: 'Moenn',
      link: 'https://moenn-technologies.com'
    },
    title: 'Angular Frontend web developer',
    techs: [
      ts, angular, git, gitlab
    ],
    job: {
      remote: true,
      time: 'Part time'
    }
  },
  {
    start: moment("2019-08"),
    end: moment("2020-06"),
    institute: {
      name: 'Devaxy',
      link: 'https://www.linkedin.com/company/devaxy'
    },
    title: 'Full Stack web developer',
    techs: [
      php, laravel, ts, angular, ionic, git, github
    ],
    job: {
      remote: false,
      time: 'Full time'
    }
  },
]
