import { createReducer, on } from "@ngrx/store";
import { AppApiActions, AppPageActions } from "./actions";
import { AppState, initialState } from "./app.state";

export const appReducer = createReducer(initialState,
  on(AppPageActions.setSection, (state, action): AppState => {

    const index = typeof action.section == 'number' ? action.section : state.sections.findIndex(section => section.anchor == action.section);

    return {
      ...state,
      currentSection: {
        index: index,
        section: state.sections[index]
      }
    }
  }),
  on(AppPageActions.requestContact, (state, action): AppState => (
    {
      ...state,
      contactRequestLoading: true,
      contactRequestSuccess: false,
    }
  )),
  on(AppApiActions.requestContactSuccess, (state, action): AppState => (
    {
      ...state,
      contactRequestLoading: false,
      contactRequestSuccess: true
    }
  )),
  on(AppApiActions.requestContactFailure, (state, action): AppState => (
    {
      ...state,
      contactRequestLoading: false,
      contactRequestSuccess: false
    }
  )),
)
