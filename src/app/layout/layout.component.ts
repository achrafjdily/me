import { AfterViewInit, Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {

  @ViewChild('backdrop') backdrop!: ElementRef;
  @ViewChild('rightBackdrop') rightBackdrop!: ElementRef;
  @ViewChild('closeIcon') closeIcon!: ElementRef;

  public leftSideBarOpen: Boolean = false;

  public rightSideBarOpen: Boolean = false;

  constructor() {
  }

  toggleLeftSideBar(event: Event) {
    event.stopPropagation()
    this.leftSideBarOpen = !this.leftSideBarOpen
  }

  backdropClick(event: Event) {
    event.stopPropagation()
    this.leftSideBarOpen = !(this.backdrop.nativeElement == event.target)
  }

  toggleRightSideBar(event: Event) {
    event.stopPropagation()
    this.rightSideBarOpen = !this.rightSideBarOpen
  }

  rightBackdropClick(event: Event) {
    event.stopPropagation()
    this.rightSideBarOpen = !(this.rightBackdrop.nativeElement == event.target)
  }

}
