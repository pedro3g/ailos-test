import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-badge-icon',
  templateUrl: './badge-icon.component.html',
  styleUrls: ['./badge-icon.component.scss'],
})
export class BadgeIconComponent {
  @Input() icon: string = '';
  @Input() badgeValue: string | number = 0;
}
