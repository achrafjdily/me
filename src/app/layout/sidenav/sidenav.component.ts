import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, tap } from 'rxjs';
import { getCurrentSection, getSelectedLang, selectLangs, selectSections } from "@store/app.selectors";
import { AppPageActions } from '../../store/actions';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'aj-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  sections$!: Observable<Array<any>>;
  langs$!: Observable<Array<any>>;
  selectedLang$!: Observable<any>;
  currentSection$!: Observable<number>;

  constructor(private store: Store, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.sections$ = this.store.select(selectSections).pipe(
      tap(sections => {
        this.route.fragment.subscribe( route => {
          if(route) this.store.dispatch(AppPageActions.setSection({ section: sections.findIndex(section => section.anchor == route) }))
        })
      })
    )
    this.langs$ = this.store.select(selectLangs)
    this.selectedLang$ = this.store.select(getSelectedLang)
    this.currentSection$ = this.store.select(getCurrentSection)
  }

  setSection(currentIndex: number) {
    this.store.dispatch(AppPageActions.setSection({ section: currentIndex }))
  }
}
