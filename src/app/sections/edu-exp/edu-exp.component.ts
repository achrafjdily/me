import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { TimeLineItem } from '@store/models/timeline-item.interface';
import { getEduTimeline, getExpTimeLine } from '@store/app.selectors';
import { EduExpSectionId } from '../../store/models/section.interface';

@Component({
  selector: 'aj-edu-exp',
  templateUrl: './edu-exp.component.html',
  styleUrls: ['./edu-exp.component.scss']
})
export class EduExpComponent implements OnInit {

  eduTimeLine$!: Observable<TimeLineItem[]>;
  expTimeLine$!: Observable<TimeLineItem[]>;

  public readonly sectionId = EduExpSectionId;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.eduTimeLine$ = this.store.select(getEduTimeline)
    this.expTimeLine$ = this.store.select(getExpTimeLine)
  }

}
