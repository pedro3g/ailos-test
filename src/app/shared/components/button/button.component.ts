import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() variant: 'outlined' | 'filled' = 'outlined';
  @Input() radius: 'rounded' | 'square' = 'rounded';
  @Input() value: string = '';
}
