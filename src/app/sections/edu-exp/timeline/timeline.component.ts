import { Component, Input, OnInit } from '@angular/core';
import { TimeLineItem } from '../../../store/models/timeline-item.interface';

@Component({
  selector: 'aj-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent{

  @Input() timeline!: TimeLineItem[] | null;

}
