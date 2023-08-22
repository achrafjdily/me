import { ViewportScroller } from '@angular/common';
import { AfterViewInit, Component, ElementRef, HostListener, Inject, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Swiper } from "swiper";
import { AppPageActions } from './store/actions';
import { getCurrentSection } from './store/app.selectors';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { SwiperContainer } from 'swiper/element';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  @ViewChild('swiper') swiperElement!: ElementRef<SwiperContainer>;

  private swiper!: Swiper;

  private layoutChange!: Observable<BreakpointState>;

  private swiperParams = {
    loop: true,
    direction: 'vertical',
    mousewheel: true
  };

  constructor(private store: Store, private route: ActivatedRoute, private scroller: ViewportScroller, private breakpointObserver: BreakpointObserver) {
    this.layoutChange = this.breakpointObserver.observe('(min-width: 1024px)');
  }

  ngAfterViewInit(): void {


    // setTimeout(() => {
    //   document.querySelectorAll('#introduction').forEach( item => {
    //     console.dir(item)
    //   })
    //   document.querySelectorAll('#contact').forEach( item => {
    //     console.dir(item)
    //   })
    //   // console.log()
    // }, 2000);

    this.route.fragment.subscribe(fragment => {
      if (fragment != null && fragment != '') {
        // history.scrollRestoration = "manual"
        this.store.dispatch(AppPageActions.setSection({ section: fragment }))
      }
    })

    this.swiper = <Swiper>this.swiperElement.nativeElement.swiper
    this.swiper.on('slideChange', () => {
      // this.store.dispatch(AppPageActions.setSection({ section: this.swiper.activeIndex }))
      console.log(this.swiper)
    });

    this.layoutChange.subscribe(breakPointState => {
      if (!breakPointState.matches) {
        if (this.swiper) this.swiper.destroy(false, false);
      } else {
        // Object.assign(this.swiperElement.nativeElement, this.swiperParams)

        // console.dir(this.swiperElement.nativeElement)

        setTimeout(() => {
          this.swiperElement.nativeElement.initialize()
        }, 10);

        // this.swiper.init()
        // this.swiper.on('slideChange', () => {
        //   // this.store.dispatch(AppPageActions.setSection({ section: this.swiper.activeIndex }))
        //   console.log(this.swiper)
        // });
        // this.swiperElement.nativeElement.initialize();
      }
    })

    this.store.select(getCurrentSection)
      .subscribe(
        currentSection => {
          // this.swiper.slideTo(currentSection.index)

          setTimeout(() => {
            this.scroller.scrollToAnchor(currentSection.section.anchor)
            // document.children?.item(0)?.children?.item(2)?.children?.item(0)?.children?.item(0)?.children?.item(1)?.children?.item(2)?.children?.item(0)?.children?.item(1)?.children?.item(currentSection.index)?.children?.item(0)?.scrollIntoView({
            //   behavior: "smooth",
            //   block: "start",
            // })
          }, 150);
        }
      )
  }
}
