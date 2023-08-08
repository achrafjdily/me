import ExperienceStatsData from "@data/sections/experience_stats.json";
import { eduTimeLine, TimeLineItem, expTimeLine } from "./models/timeline-item.interface";
import { allTechs, TechItem } from "./models/tech-item.interface";
import { Project, projects } from "./models/project.interface";
import { allSocialLinks, SocialLink, socialLinks } from "./models/social-link.interface";
import { Section, sections } from "./models/section.interface";
import { langs } from "./models/lang.interface";
import { Testimonial, testimonials } from "./models/testimonial.interface";

export interface ExperienceStats {
  years: string,
  contributions: string,
  projects: string
}

export interface AppState {
  socialLinks: Array<SocialLink>,
  allSocialLinks: Array<SocialLink>,
  sections: Section[],
  langs: Array<any>,
  selectedLang: any,
  experienceStats: ExperienceStats,
  eduTimeLine: TimeLineItem[],
  expTimeLine: TimeLineItem[],
  techs: TechItem[],
  currentSection: number,
  projects : Project[],
  testimonials : Testimonial[]
}

export const initialState: AppState = {
  socialLinks: socialLinks,
  allSocialLinks: allSocialLinks,
  sections: sections,
  langs: langs,
  selectedLang: langs[0],
  experienceStats: ExperienceStatsData,
  eduTimeLine: eduTimeLine,
  expTimeLine: expTimeLine,
  techs: allTechs,
  currentSection: 0,
  projects : projects,
  testimonials : testimonials
};