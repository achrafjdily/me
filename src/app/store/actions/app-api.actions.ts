import { createAction, props } from '@ngrx/store';
import { ContactRequestSuccessResponse } from '../models/contact-request.interface';

export const requestContactSuccess = createAction('[App API] Request Contact Success', props<{ response: ContactRequestSuccessResponse }>());

export const requestContactFailure = createAction('[App API] Request Contact Failure', props<{ error: Error }>());
