import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SocialLink } from "@store/models/social-link.interface";
import { getHiringAvailability, selectSocialLinks } from "@store/app.selectors";
import { AppPageActions } from '../../store/actions';
import { ContactSectionId } from '../../store/models/section.interface';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  hiringAvailability$!: Observable<boolean>;
  socialLinks$!: Observable<SocialLink[]>;

  @Output() closeBar: EventEmitter<Event> = new EventEmitter();

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.hiringAvailability$ = this.store.select(getHiringAvailability);
    this.socialLinks$ = this.store.select(selectSocialLinks);
  }

  goToContactSection(event: Event) {
    this.store.dispatch(AppPageActions.setSection({ section: ContactSectionId }))
    this.closeBar.emit(event)
  }

}
