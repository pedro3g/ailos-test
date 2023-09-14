import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-account-card',
  templateUrl: './account-card.component.html',
  styleUrls: ['./account-card.component.scss'],
})
export class AccountCardComponent {
  @Input() accountType: string = '';
  @Input() bank: string = '';
  @Input() accountNumber: string = '';
  @Input() digit: string = '';
}
