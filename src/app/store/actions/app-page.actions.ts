import { createAction, props } from '@ngrx/store';
import { ContactRequest } from '../models/contact-request.interface';

export const setSection = createAction('[App PAGE] Set Section', props<{ section: number | string }>());

export const requestContact = createAction('[App PAGE] Request Contact', props<{ contactRequest: ContactRequest }>());
