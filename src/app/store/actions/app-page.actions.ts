import { createAction, props } from '@ngrx/store';

export const setSection = createAction('[App Page] Set Section', props<{ section: number }>());
