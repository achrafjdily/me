import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getExperienceStats } from '@store/app.selectors';
import { ExperienceStat } from '@store/app.state';
import { ContactSectionId, IntroSectionId } from '../../store/models/section.interface';
import { AppPageActions } from '../../store/actions';

@Component({
  selector: 'aj-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss']
})
export class IntroductionComponent implements OnInit {

  expStats$!: Observable<ExperienceStat[]>;

  public readonly sectionId = IntroSectionId;

  constructor(private store: Store) { }

  ngOnInit(): void {

    this.expStats$ = this.store.select(getExperienceStats);

  }

  goToContactSection() {
    this.store.dispatch(AppPageActions.setSection({ section: ContactSectionId }))

  }
}
