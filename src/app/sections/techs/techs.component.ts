import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { TechItem } from '@store/models/tech-item.interface';
import { getTechs } from '@store/app.selectors';

@Component({
  selector: 'aj-techs',
  templateUrl: './techs.component.html',
  styleUrls: ['./techs.component.scss']
})
export class TechsComponent implements OnInit {

  public techs$! :  Observable<TechItem[]>;

  constructor(private store:Store){}

  ngOnInit(): void {
    this.techs$ = this.store.select(getTechs);
  }

}
