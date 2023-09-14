import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() variant: 'outlined' | 'filled' = 'outlined';
  @Input() radius: 'rounded' | 'square' = 'rounded';
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() horizontalPadding: 'small' | 'medium' | 'large' = 'medium';
  @Input() value: string = '';
  @Input() disabled: boolean = false;

  private getHorizontalPadding() {
    return `padding-${this.horizontalPadding}`;
  }

  getClasses() {
    return [
      this.variant,
      this.radius,
      this.size,
      this.getHorizontalPadding(),
    ].join(' ');
  }
}
