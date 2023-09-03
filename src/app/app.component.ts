import { ViewportScroller } from '@angular/common';
import { AfterViewInit, Component, ElementRef, HostListener, Inject, Renderer2, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Mousewheel, Swiper, SwiperOptions } from "swiper";
import { AppPageActions } from './store/actions';
import { getCurrentSection } from './store/app.selectors';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { filter, first, Observable, skip, take } from 'rxjs';
import { DOCUMENT } from '@angular/common';
import { PageScrollService } from 'ngx-page-scroll-core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  @ViewChild('swiper') swiperContainer!: ElementRef<HTMLDivElement>;

  private swiper!: Swiper;

  private layoutChange!: Observable<BreakpointState>;

  public readonly swiperParams!: SwiperOptions;

  constructor(private store: Store, private route: ActivatedRoute, private pageScrollService: PageScrollService, @Inject(DOCUMENT) private document: Document, private breakpointObserver: BreakpointObserver, private renderer: Renderer2, private router: Router) {

    Swiper.use([Mousewheel])

    this.layoutChange = this.breakpointObserver.observe('(min-width: 1024px)');

    this.swiperParams = {
      loop: false,
      direction: 'vertical',
      mousewheel: true,
      autoHeight: true,
      slidesPerView: 1,
      on: {
        slideChange: (swiper: Swiper) => {
          // console.log(swiper.activeIndex)
          this.store.dispatch(AppPageActions.setSection({ section: this.swiper.activeIndex }))
        }
      }
    };
  }

  ngAfterViewInit(): void {

    history.scrollRestoration = 'manual'

    this.layoutChange.subscribe(breakPointState => {
      if (!breakPointState.matches) {
        if (this.swiper) this.swiper.destroy(true, false)
        else {
          this.initSwiper()
          // @ts-ignore
          this.swiper.destroy(true, false)
        }

        this.renderer.removeStyle(this.swiperContainer.nativeElement.firstChild, 'transform')
        this.renderer.removeStyle(this.swiperContainer.nativeElement.firstChild, 'height')
      }
      else this.initSwiper()
    })


    this.route.fragment.pipe(filter(fragment => fragment != null && fragment != ''), first()).subscribe(fragment => {
      this.store.dispatch(AppPageActions.setSection({ section: <string>fragment }))
    })

    this.store.select(getCurrentSection)
      .subscribe(
        currentSection => {
          setTimeout(() => {
            if (!this.swiper.destroyed) this.swiper.slideTo(currentSection.index)

            else this.pageScrollService.scroll({
              document: this.document,
              scrollTarget: '#' + currentSection.section.anchor,
              duration: 400
            });
          }, 150);
        }
      )
  }

  initSwiper() {
    this.swiper = new Swiper(this.swiperContainer.nativeElement, this.swiperParams)
  }

  // sectionInViewPort(event: any) {
  //   console.log(event)
  // }
}
