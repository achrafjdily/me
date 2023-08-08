import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getProjects } from '@store/app.selectors';
import { Project } from '@store/models/project.interface';

@Component({
  selector: 'aj-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent  implements OnInit{

  public projects$! : Observable<Project[]>;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.projects$ = this.store.select(getProjects);
  }

}
