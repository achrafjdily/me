import { faVuejs, faAngular, faPhp, faLaravel, faJs, faGit, faGithub, faGitlab, faDocker, IconDefinition } from "@fortawesome/free-brands-svg-icons";

// type TechIcon = IconDefinition;

export interface TechItem {
  icon: IconDefinition | string,
  name: string,
  isSimpleIcon?: boolean
}

export const angular: TechItem = {
  icon: faAngular,
  name: "Angular"
}

export const ngrx: TechItem = {
  icon: 'https://cdn.simpleicons.org/ngrx/22c55e',
  name: "Ngrx",
  isSimpleIcon: true,
}

export const php: TechItem = {
  icon: faPhp,
  name: "Php"
}

export const vue: TechItem = {
  icon: faVuejs,
  name: "Vue"
}

export const laravel: TechItem = {
  icon: faLaravel,
  name: "Laravel"
}

export const js: TechItem = {
  icon: faJs,
  name: "JavaScript"
}

export const ts: TechItem = {
  icon: 'https://cdn.simpleicons.org/typescript/22c55e',
  name: "TypeScript",
  isSimpleIcon: true,
}

export const git: TechItem = {
  icon: faGit,
  name: "Git"
}

export const github: TechItem = {
  icon: faGithub,
  name: "Github"
}

export const gitlab: TechItem = {
  icon: faGitlab,
  name: "Gitlab"
}

export const docker: TechItem = {
  icon: faDocker,
  name: "Docker"
}

export const mysql: TechItem = {
  icon: 'https://cdn.simpleicons.org/mysql/22c55e',
  name: "MySql",
  isSimpleIcon: true
}

export const postgres: TechItem = {
  icon: 'https://cdn.simpleicons.org/postgresql/22c55e',
  name: "PostgreSql",
  isSimpleIcon: true
}

export const alpineJs: TechItem = {
  icon: 'https://cdn.simpleicons.org/Alpine.js/22c55e',
  name: 'AlpineJs',
  isSimpleIcon: true
}

export const ionic: TechItem = {
  icon: 'https://cdn.simpleicons.org/ionic/22c55e',
  name: 'Ionic',
  isSimpleIcon: true
}

export const tailwindcss: TechItem = {
  icon: 'https://cdn.simpleicons.org/tailwindcss/22c55e',
  name: 'Tailwind css',
  isSimpleIcon: true
}

export const restApi: TechItem = {
  icon: '/assets/imgs/icons/rest-api.svg',
  name: 'Rest APIs',
  isSimpleIcon: true
}

export const microservices: TechItem = {
  icon: '/assets/imgs/icons/microservices.svg',
  name: 'Microservices',
  isSimpleIcon: true
}

export const allTechs: TechItem[] = [php, laravel, js, ts, angular,ngrx, vue, alpineJs, ionic,tailwindcss,mysql,postgres, docker, restApi, microservices]
