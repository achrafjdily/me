import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getProjects } from '@store/app.selectors';
import { Project } from '@store/models/project.interface';
import { ProjectsSectionId } from '../../store/models/section.interface';

@Component({
  selector: 'aj-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit, AfterViewInit {

  @ViewChild('list') listContainer!: ElementRef<HTMLDivElement>;

  public projects$!: Observable<Project[]>;

  public readonly sectionId = ProjectsSectionId;

  public scrollToTop: boolean = false;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.projects$ = this.store.select(getProjects);
  }

  ngAfterViewInit(): void {
  }

  scroll() {
    const prev = this.scrollToTop
    this.scrollToTop = !this.scrollToTop
    this.listContainer.nativeElement.scrollTo({ top: prev ? 0 : this.listContainer.nativeElement.scrollHeight, behavior: 'smooth' })
  }

}
