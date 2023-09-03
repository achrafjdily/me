import { createAction, props } from '@ngrx/store';
import { ContactRequest } from '../models/contact-request.interface';
import { Section } from '../models/section.interface';

export const setSection = createAction('[App PAGE] Set Section', props<{ section: number | string }>());

export const sectionChanged = createAction('[App PAGE] Section Changed', props<{ section: Section }>());

export const requestContact = createAction('[App PAGE] Request Contact', props<{ contactRequest: ContactRequest }>());
