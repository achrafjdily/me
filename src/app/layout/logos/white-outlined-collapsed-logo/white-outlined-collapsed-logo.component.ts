import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-white-outlined-collapsed-logo',
  templateUrl: './white-outlined-collapsed-logo.component.html',
  styleUrls: ['./white-outlined-collapsed-logo.component.scss']
})
export class WhiteOutlinedCollapsedLogoComponent {

  @Input() fillClass : string = "fill-white"

}
