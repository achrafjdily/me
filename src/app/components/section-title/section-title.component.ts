import { Component, Input } from '@angular/core';

@Component({
  selector: 'aj-section-title',
  templateUrl: './section-title.component.html',
  styleUrls: ['./section-title.component.scss']
})
export class SectionTitleComponent {

  @Input() title!: string;
  @Input() secondTitle: string | null = null;

}
