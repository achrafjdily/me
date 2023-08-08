import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SocialLink } from "@store/models/social-link.interface";
import { selectSocialLinks } from "@store/app.selectors";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit{

  socialLinks$!: Observable<SocialLink[]>;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.socialLinks$ = this.store.select(selectSocialLinks);
  }

}
