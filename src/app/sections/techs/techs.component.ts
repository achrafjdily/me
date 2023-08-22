import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { TechItem } from '@store/models/tech-item.interface';
import { getTechs } from '@store/app.selectors';
import { TechStackSectionId } from '../../store/models/section.interface';

@Component({
  selector: 'aj-techs',
  templateUrl: './techs.component.html',
  styleUrls: ['./techs.component.scss']
})
export class TechsComponent implements OnInit {

  public techs$!: Observable<TechItem[]>;

  public size!: '4x' | '2x';

  public readonly sectionId = TechStackSectionId;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.techs$ = this.store.select(getTechs);
    this.size = window.innerWidth > 640 ? '4x' : '2x';
  }

  @HostListener('window:resize')
  onResize() {
    this.size = window.innerWidth > 640 ? '4x' : '2x';
  }

}
