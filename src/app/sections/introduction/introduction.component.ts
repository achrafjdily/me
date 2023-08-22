import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getExperienceStats } from '@store/app.selectors';
import { ExperienceStats } from '@store/app.state';
import { IntroSectionId } from '../../store/models/section.interface';

@Component({
  selector: 'aj-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss']
})
export class IntroductionComponent implements OnInit{

  expStats$! : Observable<ExperienceStats>;

  public readonly sectionId = IntroSectionId;

  constructor(private store :Store){}

  ngOnInit(): void {

    this.expStats$ = this.store.select(getExperienceStats);

  }
}
