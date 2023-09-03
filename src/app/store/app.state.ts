import ExperienceStatsData from "@data/sections/experience_stats.json";
import { eduTimeLine, TimeLineItem, expTimeLine } from "./models/timeline-item.interface";
import { allTechs, TechItem } from "./models/tech-item.interface";
import { Project, projects } from "./models/project.interface";
import { allSocialLinks, SocialLink, socialLinks } from "./models/social-link.interface";
import { CurrentSection, Section, sections } from "./models/section.interface";
import { langs } from "./models/lang.interface";
import { Testimonial, testimonials } from "./models/testimonial.interface";

export interface ExperienceStat {
  title: string,
  value: string,
  replaceableSlug: string
}

export interface AppState {
  hiringAvailability: boolean,
  socialLinks: Array<SocialLink>,
  allSocialLinks: Array<SocialLink>,
  sections: Section[],
  langs: Array<any>,
  selectedLang: any,
  experienceStats: ExperienceStat[],
  eduTimeLine: TimeLineItem[],
  expTimeLine: TimeLineItem[],
  techs: TechItem[],
  currentSection: CurrentSection,
  projects: Project[],
  testimonials: Testimonial[],
  contactRequestLoading: boolean,
  contactRequestSuccess: boolean,
}

export const initialState: AppState = {
  hiringAvailability: true,
  socialLinks: socialLinks,
  allSocialLinks: allSocialLinks,
  sections: sections,
  langs: langs,
  selectedLang: langs[0],
  experienceStats: ExperienceStatsData,
  eduTimeLine: eduTimeLine,
  expTimeLine: expTimeLine,
  techs: allTechs,
  currentSection: { index: 0, section: sections[0] },
  projects: projects,
  testimonials: testimonials,
  contactRequestLoading: false,
  contactRequestSuccess: false,
};
