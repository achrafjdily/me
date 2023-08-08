import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import Swiper from "swiper";
import { AppPageActions } from './store/actions';
import { getCurrentSection } from './store/app.selectors';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit, OnInit {
  @ViewChild('swiper') swiperElement!: ElementRef;
  private swiper!: Swiper;


  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.swiper = this.swiperElement.nativeElement.swiper
    this.swiper.on('slideChange', () => {
      this.store.dispatch(AppPageActions.setSection({ section: this.swiper.activeIndex }))
    });

    this.store.select(getCurrentSection)
      .subscribe(
        currentSection => {
          this.swiper.slideTo(currentSection)
        }
      )
  }
}
