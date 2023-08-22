import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { requestContact } from '../../store/actions/app-page.actions';
import { getContactRequestLoading, getContactRequestSuccess, selectAllSocialLinks } from '../../store/app.selectors';
import { ContactRequest } from '../../store/models/contact-request.interface';
import { ContactSectionId } from '../../store/models/section.interface';
import { SocialLink } from '../../store/models/social-link.interface';

@Component({
  selector: 'aj-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public socialLinks$!: Observable<SocialLink[]>;
  public contactRequestLoading$!: Observable<boolean>;

  public readonly sectionId = ContactSectionId;

  public contactForm!: FormGroup;

  constructor(private store: Store, private snackBar: MatSnackBar, private formBuilder: FormBuilder) {
    this.contactForm = formBuilder.group({
      fullname: [null, Validators.compose([Validators.required])],
      email: [null, Validators.compose([Validators.required, Validators.email])],
      phone: [null],
      message: [null, Validators.compose([Validators.required, Validators.minLength(50)])],
      captcha: [null, Validators.compose([Validators.required])],
    })
  }

  public get year() {
    return (new Date).getFullYear();
  }

  ngOnInit(): void {
    this.socialLinks$ = this.store.select(selectAllSocialLinks);
    this.contactRequestLoading$ = this.store.select(getContactRequestLoading)

    this.store.select(getContactRequestSuccess).subscribe(isSuccess => {
      if (isSuccess) this.snackBar.open("Thanks ! Your message has been sent successfully, I'll contact you back ASAP.", undefined, {
        duration: 4000
      });
    })
  }

  copy(event: Event, content: string) {

    event.preventDefault();
    event.stopPropagation();
    navigator.clipboard.writeText(content);

    this.snackBar.open('Copied to clipboard !', undefined, {
      duration: 2000
    });
  }

  submit() {
    if (this.contactForm.valid) {
      const contactRequest: ContactRequest = this.contactForm.value

      this.store.dispatch(requestContact({ contactRequest }))
    }
  }

}
