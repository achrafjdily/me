import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AppState } from './app.state';


const appState = createFeatureSelector<AppState>('appState');

export const getHiringAvailability = createSelector(
  appState,
  (state: AppState) => state.hiringAvailability
);

export const selectSocialLinks = createSelector(
  appState,
  (state: AppState) => state.socialLinks
);

export const selectAllSocialLinks = createSelector(
  appState,
  (state: AppState) => state.allSocialLinks
);

export const selectSections = createSelector(
  appState,
  (state: AppState) => state.sections
);

export const selectSectionById = () => createSelector(
  appState,
  (state: AppState) => state.sections
);

export const selectLangs = createSelector(
  appState,
  (state: AppState) => state.langs
);

export const getSelectedLang = createSelector(
  appState,
  (state: AppState) => state.selectedLang
);

export const getExperienceStats = createSelector(
  appState,
  (state: AppState) => state.experienceStats
);

export const getEduTimeline = createSelector(
  appState,
  (state: AppState) => state.eduTimeLine
)

export const getExpTimeLine = createSelector(
  appState,
  (state: AppState) => state.expTimeLine
)

export const getTechs = createSelector(
  appState,
  (state: AppState) => state.techs
)

export const getCurrentSection = createSelector(
  appState,
  (state: AppState) => state.currentSection
)

export const getProjects = createSelector(
  appState,
  (state: AppState) => state.projects
)

export const getTestimonials = createSelector(
  appState,
  (state: AppState) => state.testimonials
)

export const getContactRequestLoading = createSelector(
  appState,
  (state: AppState) => state.contactRequestLoading
)

export const getContactRequestSuccess = createSelector(
  appState,
  (state: AppState) => state.contactRequestSuccess
)
