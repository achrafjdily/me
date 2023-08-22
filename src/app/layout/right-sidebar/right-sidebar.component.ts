import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, tap } from 'rxjs';
import { getCurrentSection, selectSections } from '../../store/app.selectors';
import { CurrentSection, Section } from '../../store/models/section.interface';
import { AppPageActions } from '../../store/actions';

@Component({
  selector: 'aj-right-sidebar',
  templateUrl: './right-sidebar.component.html',
  styleUrls: ['./right-sidebar.component.scss']
})
export class RightSidebarComponent implements OnInit {

  public sections$!: Observable<Section[]>;
  public currentSection$!: Observable<CurrentSection>;

  @Output() closeBar: EventEmitter<Event> = new EventEmitter()

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.sections$ = this.store.select(selectSections);
    this.currentSection$ = this.store.select(getCurrentSection)
  }

  setSection(event: Event, currentIndex: number) {
    this.closeBar.emit(event)
    this.store.dispatch(AppPageActions.setSection({ section: currentIndex }))
  }
}
