import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getCurrentSection, getSelectedLang, selectLangs, selectSections } from "@store/app.selectors";
import { AppPageActions } from '../../store/actions';
import { CurrentSection } from '../../store/models/section.interface';

@Component({
  selector: 'aj-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  sections$!: Observable<Array<any>>;
  langs$!: Observable<Array<any>>;
  selectedLang$!: Observable<any>;
  currentSection$!: Observable<CurrentSection>;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.sections$ = this.store.select(selectSections)
    this.langs$ = this.store.select(selectLangs)
    this.selectedLang$ = this.store.select(getSelectedLang)
    this.currentSection$ = this.store.select(getCurrentSection)
  }

  setSection(currentIndex: number) {
    this.store.dispatch(AppPageActions.setSection({ section: currentIndex }))
  }
}
