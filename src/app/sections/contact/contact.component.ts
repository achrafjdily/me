import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectAllSocialLinks } from '../../store/app.selectors';
import { SocialLink } from '../../store/models/social-link.interface';

@Component({
  selector: 'aj-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit{

  public socialLinks$! : Observable<SocialLink[]>;

  constructor(private store:Store){}

  ngOnInit(): void {
    this.socialLinks$ = this.store.select(selectAllSocialLinks);
  }

  copy(event : Event,content : string){
    event.preventDefault();
    event.stopPropagation();
    navigator.clipboard.writeText(content);
  }

}
