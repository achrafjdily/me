import { Component, Input } from '@angular/core';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';
import { IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { TechItem } from '@store/models/tech-item.interface';

@Component({
  selector: 'aj-tech-icon',
  templateUrl: './tech-icon.component.html',
  styleUrls: ['./tech-icon.component.scss']
})
export class TechIconComponent {
  @Input() tech!: TechItem;
  @Input() withoutTooltip: boolean = false;
  @Input() size: SizeProp = 'xl';

  private sizesMap = {
    "2xs": 'w-2.5',
    "xs": 'w-3',
    "sm": 'w-3.5',
    "lg": 'w-5',
    "xl": 'w-6',
    "2xl": 'w-8',
    "1x": 'w-4',
    "2x": 'w-8',
    "3x": 'w-12',
    "4x": 'w-16',
    "5x": 'w-20',
    "6x": 'w-24',
    "7x": 'w-28',
    "8x": 'w-32',
    "9x": 'w-36',
    "10x": 'w-40',
  }

  public get faIcon(): IconDefinition {
    return this.tech.icon as IconDefinition;
  }

  public get sizeClass(): string {
    return this.sizesMap[this.size];
  }
}
