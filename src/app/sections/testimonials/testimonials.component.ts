import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getTestimonials } from '../../store/app.selectors';
import { Testimonial } from '../../store/models/testimonial.interface';

@Component({
  selector: 'aj-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {

  public testimonials$! : Observable<Testimonial[]>;

  constructor(private store : Store){}

  ngOnInit(): void {
    this.testimonials$ = this.store.select(getTestimonials)
  }

}
