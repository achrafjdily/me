import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap, tap } from "rxjs";
import { environment } from "../../environments/environment.development";
import { AppApiActions, AppPageActions } from "./actions";
import { ContactRequest } from "./models/contact-request.interface";
import { AppService } from "./service/app.service";

@Injectable()
export class AppEffects {

  constructor(private actions$: Actions, private appService: AppService, private router: Router) { }

  requestContact$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AppPageActions.requestContact),
      switchMap((action) => {

        const contactRequest: ContactRequest = {
          ...action.contactRequest,
          subject: 'AJ | Contact request from : ' + action.contactRequest.fullname,
          access_key: environment.web3Form.key,
        }

        return this.appService.sendContactRequest(contactRequest).pipe(
          map(response => AppApiActions.requestContactSuccess({ response: response })),
          catchError(error => {
            return of(AppApiActions.requestContactFailure({ error }));
          })
        )
      })
    )
  })

  sectionChanged$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AppPageActions.sectionChanged),
      tap((action) => {
        this.router.navigate(['.'], { fragment: action.section.anchor })
      })
    )
  })

}
