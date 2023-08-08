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
      php,laravel,js,vue,git,gitlab,docker
    ],
    job : {
      remote : true,
      time : 'Full time'
    }
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
      php,laravel,js,alpineJs,git,gitlab,docker
    ],
    job : {
      remote : true,
      time : 'Part time'
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
      ts,angular,git,gitlab
    ],
    job : {
      remote : true,
      time : 'Part time'
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
      php,laravel,ts,angular,ionic,git,github
    ],
    job : {
      remote : false,
      time : 'Full time'
    }
  },
]
