import { createReducer, on } from "@ngrx/store";
import { AppPageActions } from "./actions";
import { initialState } from "./app.state";

export const appReducer = createReducer(initialState,
  on(AppPageActions.setSection, (state, action) => (
    {
      ...state,
      currentSection: action.section
    }
  ))
)
